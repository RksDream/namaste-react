import React from "react";
import ReactDOM from "react-dom";

const heading2 = React.createElement("h1", {id:"heading"}, "Hello Pandaa from React");

const root2 = ReactDOM.createRoot(document.getElementById("root"));

root2.render(heading2);


//Below are examle to create complex html strucure in React
{/* <div id = "parent">
    <div id = "child">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
    <div id = "child2">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
</div> */}

const parent = React.createElement("div", {id : "parent"}, [
    React.createElement("div", {id : "child1"}, [
        React.createElement("h1", {}, "I am an h1 Tags"),
        React.createElement("h2", {}, "I am an h2 Tags")
    ]), 
    React.createElement("div", {id : "child2"}, [
        React.createElement("h1", {}, "I am an h1 Tags"),
        React.createElement("h2", {}, "I am an h2 Tags") 
    ])
]);

root2.render(parent);