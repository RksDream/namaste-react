import React from "react";
import ReactDOM from "react-dom";

// Creating element from React
const heading = React.createElement(
    "h1",
     {}, 
     "Idu ki Pandaa👫..");

     console.log(heading);

// Creating element from JSX
const jsxHeading = <h1>Idu ki Pandaa👫..</h1>

console.log(jsxHeading);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);