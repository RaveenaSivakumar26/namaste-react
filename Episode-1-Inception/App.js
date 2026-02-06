//  React Basic creation
// CreateEelemnet takes 3 args --> html tag(p,div,h1,span,..) / 2nd arg takes attributes like id,class / 3rd takes a children/content to be rendered
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React!"
);

/* Create this structure
* <div id="parent">
      <div id="child">
        <h1></h1>
      </div>
  </div>
*  
*/

const children2 = React.createElement("h1", {}, "Hello from H1 Tag");
const children1 = React.createElement("div", { id: "child" }, children2);
const parent = React.createElement("div", { id: "parent" }, children1);

// another approach
const parent1 = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, "Hello from H1 Tag"),
  React.createElement("h1", {}, "Hello from H2 Tag"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent1);
