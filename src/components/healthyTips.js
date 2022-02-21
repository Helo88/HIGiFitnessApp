import React from "react";
import { Route, Redirect, Switch } from "react-router";
import "sweetalert2/dist/sweetalert2.all.min.js";
import "sweetalert2/dist/sweetalert2.min.js";
import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import Homepage from "./Homepage";

const HealthyTips = () => {

    const tips = [
        "Consume less Salt and Sugar",
        "Reduce intake of harmful Fats. Fats consumed should be less than 30% of your total energy intake.",
        "Avoid harmful use of Alcohol. Consuming alcohol can lead to health problems such as mental and behavioural disorders.",
        "Check your Blood Pressure regularly",
        "Drink only safe Water. Drinking unsafe water can lead to water-borne diseases such as cholera, diarrhoea, hepatitis A, typhoid and polio.",
        "Talk to someone you trust if you are feeling down. Depression is a common illness worldwide with over 260 million people affected.",
        "Take antibiotics only as prescribed. Antibiotic resistance is one of the biggest public health threats in our generation.",
        "Clean your Hands properly. Clean hands can prevent the spread of infectious illnesses.",
        "Prepare your food correctly. Unsafe food containing harmful bacteria and viruses",
        "Have regular check-ups. Regular check-ups can help find health problems before they start.",
        "Eat nuts and seeds. They are packed with protein, fiber, and a variety of vitamins and minerals",
        "Avoid ultra-processed foods. Ultra-processed foods are foods containing ingredients that are significantly modified from their original form.",
        "Eat fatty fish. Fish is a great source of high-quality protein and healthy fat.",
        "Get enough sleep. Poor sleep can drive insulin resistance, can disrupt your appetite hormones, and reduce your physical and mental performance",
        "Take vitamin D if you are deficient. If you do not spend a lot of time in the sunlight, your vitamin D levels may be low.",
        " Eat plenty of fruits and vegetables. Vegetables and fruits are loaded with prebiotic fiber, vitamins, minerals, and antioxidants.",
        "Eat adequate protein. Eating enough protein is vital for optimal health, as it provides the raw materials your body needs to create new cells and tissues",
        "Use extra virgin olive oil. Extra virgin olive oil is one of the healthiest vegetable oils you can use.",
        " Use plenty of herbs and spices. They not only provide flavor but also may offer several health benefits as well",
        "Meditate. Stress has a negative effect on your health. It can affect your blood sugar levels, food choices, susceptibility to sickness, weight, fat distribution, and more.",
      ];

    const randomTip = tips[Math.floor(Math.random() * tips.length )];

    Swal.fire({
        title: 'Tip Of The Day',
        text: randomTip,
        icon: 'info',
        showDenyButton: true,
        showConfirmButton: false,
        denyButtonColor: '#35858B',
        denyButtonText: `Close`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })

    return (

        <Switch>
            <Route path="/">
                <Homepage />
            </Route>
            <Redirect from="/healthytips" to="/" />
        </Switch>


    );
};
export default HealthyTips;
