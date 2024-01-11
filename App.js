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


// React Functional Component
// React functional component is a simple Javascript function which return JSX
// React functional component is a simple Javascript function which return React element
const HeadingComponent = () => {
    return <h1>Idu ki Pandaa👫.. from Functional Component</h1>
}


const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
const root3 = ReactDOM.createRoot(document.getElementById("root3"));

root.render(heading);
root2.render(jsxHeading);

// Rendering the functional component
root3.render(<HeadingComponent/>);