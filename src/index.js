import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from './redux/store';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bulma/css/bulma.css";
import "./style/index.css";
import "leaflet/dist/leaflet.css";
import "react-notifications/lib/notifications.css";


ReactDOM.render( 
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));
