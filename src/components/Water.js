import React from 'react';
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import axios from "axios";
import { axiosInstance } from "../js/network/index";


const Water = () => {
    const [count, setCount] = useState({ currentAmount: 0 });
    const [totalAmount, setAmount] = useState(0);
    var d = new Date()
    let date = d.getHours() + ":" + d.getMinutes();
    const waterAmount = 3000
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    useEffect(() => {
        // const interval = setInterval(() => {
        axiosInstance.get('http://127.0.0.1:8000/water/', {
        })

            .then((res) => {
                console.log(res)
                return res.data
            }).then((data) => {

                Swal.fire({
                    title: `Your current amount of water ${data.result} Mliter from daily amount 3000 Mliter`,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })

                return data;
            })
            .then((data) => {
                setCount({ currentAmount: data.result })
                console.log(count.currentAmount)
                if (date === "22:21" || date === "21:21" || date === "21:48" || date === "9:0" || date === "12:0" || date === "15:0" || date === "18:0" || date === "21:0" || date === "0:0") {
                    console.log("nnnnnnnnnnnnnnnnnnnnnnn")
                    if (data.result < 3000) {

                        swalWithBootstrapButtons.fire({
                            title: 'Did you drink water ?',
                            text: "Confirm or Dismiss!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonText: 'Yes,I did it!',
                            cancelButtonText: 'No, cancel!',
                            reverseButtons: true
                        }).then((result) => {
                            if (result.isConfirmed) {
                                swalWithBootstrapButtons.fire(
                                    'Good Job!',
                                    'success'
                                )
        
                                    axiosInstance.put(`http://127.0.0.1:8000/water/`, { 'count': (data.result) + 500 }, {
                                    })
                                


                            } else if (result.dismiss === Swal.DismissReason.cancel) {
                                swalWithBootstrapButtons.fire(
                                    'Cancelled',
                                    'You have to drink some water :)',
                                    'error'
                                )
                            }

                        })
                    }
                    else {
                            Swal.fire({
                                title: 'Good Job , Keep in going, You have reached the goal',
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            })
                        } 

                    console.log("true")
                } else {
                    console.log("false")
                    console.log(date)
                    console.log(count)
                }

            })

        //     }, 60000);

        //  return () => clearInterval(interval);
    }, [d.getMinutes()])
    return (
        <div>
            {/* {count} */}
        </div>
    );
}

export default Water;
