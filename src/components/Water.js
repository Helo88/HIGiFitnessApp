import React from 'react';
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import axios from "axios";
import {axiosInstance} from "../js/network/index";
import Loader from "./Loader";

const Water = () => {
    const [count, setCount] = useState({currentAmount :0});
    const [isLoading, setLoading] = useState(true)

    var d = new Date()
    let date = d.getHours() + ":" + d.getMinutes();

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    useEffect(() => {
        // const interval = setInterval(() => {
            axiosInstance.get('http://127.0.0.1:8000/water/',{				
            })    
        .then((res) => {
            console.log( res)
            setCount({currentAmount :res.data.currentAmount})
            setLoading(false)
            return res.data
        }).then((data)=>{
            console.log(count)

        })
        .then((res)=>{
            if (date === "19:15" || date === "3:31" || date === "2:53"  || date === "18:00"  || date === "21:00"){
                console.log("nnnnnnnnnnnnnnnnnnnnnnn")
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
                        setCount(count.currentAmount = count.currentAmount+1)
                        console.log(count.currentAmount)

                        axiosInstance.put(`http://127.0.0.1:8000/water/`,{'count':count.currentAmount},{

                        })
    
                    } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                    ) {
                        swalWithBootstrapButtons.fire(
                            'Cancelled',
                            'You have to drink a cup water :)',
                            'error'
                        )
                    }
                })
    
                console.log("false")
            }else{
                console.log("true")
                console.log(date)
                console.log(count)
            }
    
        })

//     }, 60000);

//  return () => clearInterval(interval);
    }, [])
    return isLoading ? (   //Checkif if is loading
        <Loader/>
        ) : (
            <div>{count.currentAmount}</div>
    );
}

export default Water;
