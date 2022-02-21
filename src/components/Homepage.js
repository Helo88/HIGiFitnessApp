import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import myimg from "../images/home.jpg"
import { Activity, HeartHalf } from 'react-bootstrap-icons';
import "../style/Reg.css";

const useStyles = makeStyles((theme) => ({

    root: {
        minHeight: "100vh",
        backgroundImage: `url(${myimg})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:'cover',
        opacity: 1.5
    }, 
}));

export default function Homepage(){
    const classnamees = useStyles();
    return <div className={classnamees.root}>
        <CssBaseline />
        <div className="row">
            <h1 className="des h1 col ms-5"> <strong>
            <span className="des1">DON'T DIE </span>
            <span className="des2">WITHOUT EXPLORING </span><br/>
            <span className="des3">WHAT YOUR BODY </span> 
            <span className="des4">IS TRULY </span> <br/>
            <span className="des5">CAPABLE OF </span>
            </strong>
            </h1>
            <div className="col me-5">
                <strong className="ic"><Activity/> &nbsp;
                <HeartHalf /></strong>
            </div>
        </div>
    </div>
}
