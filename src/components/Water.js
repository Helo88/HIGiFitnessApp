import React from 'react';
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import axios from "axios";

const Water = () => {

    const [count, setCount] = useState({currentAmount :0});
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
        axios.get('http://127.0.0.1:9000/water/3/', {
            
          }).then((res) => {
            console.log("fffffffffffff:: "+ res.data.currentAmount)
            setCount({currentAmount :res.data.currentAmount})
            return res.data
        }).then((data)=>{
            console.log(count)

        })
        .then((res)=>{
            if (date === "3:49" || date === "3:50" || date === "3.45"  || date === "18:00"  || date === "21:00"){
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
                        console.log(count)

                        axios.put(`http://localhost:9000/water/3/`,count)
    
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

    // }, 60000);

//  return () => clearInterval(interval);
    }, [])
    return (
        <div>
            {/* {count} */}
        </div>
    );
}

export default Water;
