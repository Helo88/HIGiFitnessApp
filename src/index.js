import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CookiesProvider } from "react-cookie";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bulma/css/bulma.css"
import "./style/index.css";
import "leaflet/dist/leaflet.css"

ReactDOM.render( 
<CookiesProvider>
    <App />
 </CookiesProvider>, document.getElementById("root"));
