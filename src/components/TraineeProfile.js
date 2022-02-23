import React, { useEffect, useState } from "react";
import "../style/trainerProfile.css";
import mylogo from "../images/logo.jpg";
import { ChatDotsFill, ClockFill } from "react-bootstrap-icons";
import {axiosInstance} from '../js/network/index';
import { useHistory } from 'react-router-dom';
import {Form, Modal,Button,InputGroup,FormControl,ModalTitle,ModalBody,ModalFooter,ModalHeader} from 'react-bootstrap';
import { post } from "jquery";
import { Link } from "react-router-dom";

const TraineeProfile = () => {
    return(<>
    <p>Hello Trainee</p>
    </>)
}

export default TraineeProfile;