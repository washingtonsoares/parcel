import "./styles.css";
import ListMaker from "./listmaker";

// let's make some silly lists
const myLists = {
  vegetables: ["cucumber", "turnip", "potato", "carrot", "spinach"],
  dogsNames: ["Rover", "Bosley", "Finn", "Digby", "Doggy McDogface"]
};

// instantiate our ListMaker class
const listMaker = new ListMaker(myLists);

// kick off the list html generation
listMaker.generateLists();

// output the html to the browser
document.getElementById("app").innerHTML = `
<h1>Let's make lists!</h1>
<div>
  ${listMaker.listsOutput}
</div>
`;
