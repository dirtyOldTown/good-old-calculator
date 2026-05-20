import { Calculator } from "./controllers/calculator.class.js";
import { Calculation } from "./controllers/computation.class.js";
import { DISPLAY_EXPRESSION, DISPLAY_RESULT } from "./config/elements.js";
import { ADVANCED_OPERATORS } from "./config/operators.js";
let arr = [];
let expression = 0;

// Class initialization
let calculator = new Calculator();
let calculation = new Calculation();

document.addEventListener("click", (e) => {
  let target = e.target.closest(".input-view");
  if (!target) return;

  //Regulation when entering expression
  calculator.preventIncorrectEntry(arr, target);
  calculator.removeIncorrectEntry(arr);
  
  //Update rough expression before calculation
  expression = calculator.updateRoughExpression(arr);
  DISPLAY_EXPRESSION.value = expression;

  //Set expression in local storage
  calculation.setExpression(expression);
});

// Computation

calculation.getResult(DISPLAY_RESULT);
calculation.allClear(arr, expression, DISPLAY_EXPRESSION, DISPLAY_RESULT);
calculation.clear(arr, expression, DISPLAY_EXPRESSION, DISPLAY_RESULT);

// Prevent focus on display monitor
DISPLAY_EXPRESSION.addEventListener("focus", () => DISPLAY_EXPRESSION.blur());
DISPLAY_RESULT.addEventListener("focus", () => DISPLAY_RESULT.blur());

// alert
/* ADVANCED_OPERATORS.forEach(operator => {
  operator.addEventListener("click", () => {
    alert("Please close the parenthesis after entering the expression.\nDo not enter extra parenthesis for now.");
  }, { once: true });
}); */

let exp = "5+9)";
let regexp = /\)/g;
let regexp2 = /\(/g;
let len1 = exp.match(regexp) ?? [];

let len2 = exp.match(regexp2) ?? [];

if (len1.length > len2.length) {
 console.log("SHIT");
 let expArr = exp.split("");
 expArr.pop();
 exp = expArr.join("")

}
 console.log(exp)