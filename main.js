import { preventIncorrectEntry } from "./controllers/preventInputs.js";
import { getStartingExpression } from "./data/expressions.js";
import { removeIncorrectEntry } from "./controllers/removeInputs.js";
import { updateExpression } from "./controllers/updateExpression.js";

const mainTable = document.querySelector(".back-display input");
let arr = [];
let roughExpression = "";
let expression = "";

document.addEventListener("click", (e) => {
  let target = e.target.closest(".input-view");
  if (!target) return;

  //Regulation when entering expression
  preventIncorrectEntry(arr, target);
  removeIncorrectEntry(arr, target);
  
  //Update rough expression before calculation
  roughExpression = getStartingExpression(arr);
  expression = updateExpression(roughExpression, expression);
  mainTable.value = expression;
});








