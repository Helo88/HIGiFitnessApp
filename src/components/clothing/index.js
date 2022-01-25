import { useParams, useHistory ,useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


import "../../style/clothing.css";

export const Clothing =()=>{



return(
<>
<div className="px-2 border border-1  " id="clothingIntro">
    <div className="container pt-2 mt-5">
        <main id="clothingMain" className="">
          <h1 className="mb-5 text-center text-uppercase fw-bold">First Time Workout Or Yoga ?!</h1>
          <div  className="mt-5" id="quote">

          </div>
          <div className="row " id="questionSec">
                <div id="question" className="col-12 col-md-3">
                    <div id="qBody" className="text-center">
                    why what you wear while exercising really matters ?
                    </div>
                </div>
                <div id="answers"  className="col-12 offset-0 offset-md-2 col-md-7">
                        1-ws
                        <br></br>
                        2-sjjs
                        <br></br>
                        3-s=ls
                </div>
          </div>
          
        </main>
    {/* Quote */}
    {/* Advices */}
    {/* sections */}
    {/* find  */}
    </div>
</div>
<div className="px-2 border border-1  " id="clothingDetails">
   <div className="container">
      <h2>What do you need to start  ?</h2>
   </div>
</div>
</>


)



}



