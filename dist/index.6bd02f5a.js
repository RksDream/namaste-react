const heading2 = React.createElement("h1", {
    id: "heading"
}, "Hello Pandaa from React");
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(heading2);
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "I am an h1 Tag"),
        React.createElement("h2", {}, "I am an h2 Tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I am an h1 Tag"),
        React.createElement("h2", {}, "I am an h2 Tag")
    ])
]);
root2.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
