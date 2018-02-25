// bootstrap -- virtual dom to real dom

import React from "react";
import {render} from "react-dom";
import App1 from './app/App';


// COMPARE REAL AND VIRTUAL DOM


// passing the props into the childs
render(<App1 color="white"/>, // virtual dom
document.getElementById("root"));