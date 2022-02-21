import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
// import myimg from "../home.jpg"
import { Activity, HeartHalf } from 'react-bootstrap-icons';



const useStyles = makeStyles((theme) => ({

    root: {
        minHeight: "100vh",
        backgroundImage: `url("../../public/assets/images/home.jpg")`,
        backgroundRepeat:"no-repeat",
        backgroundSize:'cover',
        opacity: 1.5
    }, 
}));

export default function Homepage(){
    const classes = useStyles();
    return <div className={classes.root}>
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
