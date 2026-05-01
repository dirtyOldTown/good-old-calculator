import { Calculator } from "./controllers/calculator.class.js";
import { Operation } from "./controllers/operations.class.js";
import { DISPLAY } from "./config/elements.js";

const mainTable = document.querySelector(".back-display input");
let arr = [];
let expression = "";

// Class Calculator initialization
let calculator = new Calculator();

document.addEventListener("click", (e) => {
  let target = e.target.closest(".input-view");
  if (!target) return;
  //Regulation when entering expression
  calculator.preventIncorrectEntry(arr, target);
  calculator.removeIncorrectEntry(arr);
  
  //Update rough expression before calculation
  expression = calculator.updateRoughExpression(arr);
  mainTable.value = expression;
});

// Regulation & Operation
let operation = new Operation();

operation.allClear(arr, expression, DISPLAY);
operation.clear(arr, expression, DISPLAY)






