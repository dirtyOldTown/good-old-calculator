import { Calculator } from "./controllers/calculator.class.js";
import { Computation } from "./controllers/computation.class.js";
import { DISPLAY_EXPRESSION, DISPLAY_RESULT } from "./config/elements.js";

let arr = [];
let expression = "";

// Class initialization
let calculator = new Calculator();
let computation = new Computation();

document.addEventListener("mousedown", (e) => {
  let target = e.target.closest(".input-view");
  if (!target) return;

  //Regulation when entering expression
  calculator.preventIncorrectEntry(arr, target);
  calculator.removeIncorrectEntry(arr);
  
  //Update rough expression before calculation
  expression = calculator.updateRoughExpression(arr);
  DISPLAY_EXPRESSION.value = expression;
  
  //Set expression in local storage
  computation.setExpression(expression);
});

// Computation

computation.getResult(DISPLAY_RESULT);
computation.allClear(arr, expression, DISPLAY_EXPRESSION, DISPLAY_RESULT);
computation.clear(arr, expression, DISPLAY_EXPRESSION, DISPLAY_RESULT);












