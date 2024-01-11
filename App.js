import React from "react";
import ReactDOM from "react-dom";

// Creating element from React
const heading = React.createElement(
    "h1",
     {className : "parent"}, 
     "Idu ki Pandaa👫.. from React");

     console.log(heading);

// Creating element from JSX
const jsxHeading = <h1 className="parent">Idu ki Pandaa👫.. from JSXHeading</h1>

console.log(jsxHeading);


const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root.render(heading);
root2.render(jsxHeading);