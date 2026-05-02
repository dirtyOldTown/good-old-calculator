import { Calculator } from "./controllers/calculator.class.js";
import { Operation } from "./controllers/operations.class.js";
import { DISPLAY_EXPRESSION, DISPLAY_RESULT, EQUAL } from "./config/elements.js";
import { CLEAR } from "./config/operators.js";

let arr = [];
let expression = "";
let result = '';

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
  DISPLAY_EXPRESSION.value = expression;

localStorage.setItem("expression", expression);
  
});

EQUAL.addEventListener("click", (e) => {
  result = localStorage.getItem("expression");
  DISPLAY_RESULT.value = eval(result);
});


// Class Operation initialization
let operation = new Operation();

operation.allClear(arr, expression, DISPLAY_EXPRESSION, DISPLAY_RESULT);
operation.clear(arr, expression, DISPLAY_EXPRESSION, DISPLAY_RESULT);











