import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../js/network/index';
<<<<<<< HEAD
=======
import { useCookies } from 'react-cookie';
>>>>>>> ca9fee9322209a82e1f185380839f0356b8f89af
import axios from 'axios';
import ReactDOM from "react-dom";
import 'sweetalert2/dist/sweetalert2.all.min.js'
import 'sweetalert2/dist/sweetalert2.min.js'
import 'sweetalert2/dist/sweetalert2.min.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'

const WeightTracker = () => {

    const [weightList, setWeightList] = useState({
        currentWeight: "",
<<<<<<< HEAD
        numOfLogin: 0,
=======
>>>>>>> ca9fee9322209a82e1f185380839f0356b8f89af
    });


    async function setCurrentWeight() {
        const { value: traineeWeight } = await Swal.fire({
            title: 'Enter your current weight',
            input: 'text',
            inputLabel: 'Current Weight',
            inputPlaceholder: 'Enter your Current Weight',
            confirmButtonColor: '#35858B',
            confirmButtonText: 'Check',
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write your current weight!'
                }
            }
        })

        if (traineeWeight) {
            if (parseFloat(traineeWeight) > parseFloat(weightList.currentWeight)) {
                Swal.fire({
                    title: 'OoPs!',
                    text: 'You gain weight. You should take care of your healthy food. Go to healthy tips section.',
                    icon: 'error',
                    showDenyButton: true,
                    showConfirmButton: false,
                    denyButtonText: `Close`,
                })
            }

            else {
                Swal.fire({
                    title: 'Great Job!',
                    text: 'Keep going. You lost ' + (parseFloat(weightList.currentWeight) - parseFloat(traineeWeight)) + 'Kg this Week.',
                    icon: 'success',
                    showDenyButton: true,
                    showConfirmButton: false,
                    denyButtonColor: '#007500',
                    denyButtonText: `Close`,
                })
            }

            setWeightList(() => {
                weightList.currentWeight = traineeWeight
<<<<<<< HEAD
                weightList.numOfLogin += 1
            })

            axiosInstance.put('http://127.0.0.1:8000/TraineeCurrentWeight/', {
                'currentWeight': parseFloat(weightList.currentWeight),
                'currentCounter': parseInt(weightList.numOfLogin)
            })
=======
            })

            axiosInstance.put('http://127.0.0.1:8000/TraineeCurrentWeight/', { 'currentWeight': parseFloat(weightList.currentWeight)})
>>>>>>> ca9fee9322209a82e1f185380839f0356b8f89af
        }
    }


    useEffect(() => {
        axiosInstance.get('http://127.0.0.1:8000/TraineeCurrentWeight/')
            .then((res) => {
                setWeightList(() => {
                    weightList.currentWeight = res.data.result
<<<<<<< HEAD
                    weightList.numOfLogin = res.data.counter
                })
            }).then(() => {

                const days = [1,2,3,4, 5, 6]
                const d = new Date();
                let dbCounter = parseInt(weightList.numOfLogin);

                if ((d.getDay() === 0) && (dbCounter === 1)) {
                    setCurrentWeight();
                }

                else if (dbCounter === 1) {console.log("no change")}

                else if (days.includes(d.getDay())) {

                    axiosInstance.put('http://127.0.0.1:8000/TraineeCurrentWeight/', {
                        'currentWeight': parseFloat(weightList.currentWeight),
                        'currentCounter': 1
                    })
                }

                else {
                    setWeightList(() => {
                        weightList.numOfLogin += 1;
                    })

                    axiosInstance.put('http://127.0.0.1:8000/TraineeCurrentWeight/', {
                        'currentWeight': parseFloat(weightList.currentWeight),
                        'currentCounter': parseInt(weightList.numOfLogin)
                    })
                }
            })
            .catch((err) => console.log(err));

=======
                })
            })
            .catch((err) => console.log(err));

        const d = new Date();

        if (d.getDay() == 1) {
            setCurrentWeight();
        }

>>>>>>> ca9fee9322209a82e1f185380839f0356b8f89af
    }, []);

    return (
        <></>
    );
}
export default WeightTracker;