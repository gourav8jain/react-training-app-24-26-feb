// bootstrap -- virtual dom to real dom

import React from "react";
import {render} from "react-dom";
import App1 from './app/App';


// COMPARE REAL AND VIRTUAL DOM

render(<App1/>, // virtual dom
document.getElementById("root"));