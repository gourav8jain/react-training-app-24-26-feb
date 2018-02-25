// bootstrap -- virtual dom to real dom

import React from "react";
import {render} from "react-dom";
import {App} from './app/App';
import Routes from "./app/Routes";


// COMPARE REAL AND VIRTUAL DOM


// passing the props into the childs
render(<Routes />, // virtual dom
document.getElementById("root"));