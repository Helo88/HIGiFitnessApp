import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../style/traineeProfile.css';
import avatar from "../images/av.jpg"
import { Link } from "react-router-dom";
import axios from "axios";
import { axiosInstance } from '../js/network/index';

const TraineeProfile = () => {

    useEffect(() => {
        axiosInstance.get('http://127.0.0.1:8000/workoutfavplan/')
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err));

    }, []);


    return (
        <>
            <br /><br />
            <div className='container text-center'>
                <div className="row">
                    <div className='col'></div>
                    <div className="col-md-8">
                        <div className="card user-card">
                            <div className="card-header">
                                <h5>Profile Information</h5>
                            </div>
                            <div className="card-block">
                                <div className="user-image">
                                    <img src={`${avatar}`} className="img-radius" alt="User-Profile-Image" />
                                </div>
                                <h6 className="f-w-600 m-t-25 m-b-10">Alessa Robert</h6>
                                <p className="text-muted">Active| Alessa@gmail.com | Born 23.05.1992</p>
                                <hr />

                                <div className="bg-c counter-block m-t-10 p-20 text-black">
                                    <div className="row">
                                        <div className="col-4"></div>
                                        <div className="col-4">
                                            <i className="fa fa-user"></i>
                                            <p>Favorite Plans</p>
                                        </div>
                                        <div className="col-4"></div>
                                    </div>
                                </div>
                                <div className='row mt-3  text-black'>
                                    <div className='col-4 '>Plan ID </div>
                                    <div className='col-4'>Plan Name </div>
                                    <div className='col-4'>Plan Category </div>
                                </div>
                                <div className='row mt-4 '>
                                    <div className='col-4'>1 </div>
                                    <div className='col-4'>Leg Workout </div>
                                    <div className='col-4'>Workout Plans </div>
                                </div>
                                <div className='row mt-4 '>
                                    <div className='col-4'>5 </div>
                                    <div className='col-4'>Leg Yoga </div>
                                    <div className='col-4'>Yoga Plans </div>
                                </div>
                                <div className='row mt-4 '>
                                    <div className='col-4'>5 </div>
                                    <div className='col-4'>Leg Yoga </div>
                                    <div className='col-4'>Yoga Plans </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'></div>
                </div>
            </div>
        </>
    );

};

export default TraineeProfile;
