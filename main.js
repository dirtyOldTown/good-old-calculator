import { preventIncorrectEntry } from "./controllers/preventInputs.js";
import { removeIncorrectEntry } from "./controllers/removeInputs.js";
import { updateRoughExpression} from "./controllers/expressions.js";

const mainTable = document.querySelector(".back-display input");
let arr = [];
let expression = "";

document.addEventListener("click", (e) => {
  let target = e.target.closest(".input-view");
  if (!target) return;

  //Regulation when entering expression
  preventIncorrectEntry(arr, target);
  removeIncorrectEntry(arr, target);

  //Update rough expression before calculation
  expression = updateRoughExpression(arr)
  mainTable.value = expression;
});

  






