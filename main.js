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

// alert
/* ADVANCED_OPERATORS.forEach(operator => {
  operator.addEventListener("click", () => {
    alert("Please close the parenthesis after entering the expression.\nDo not enter extra parenthesis for now.");
  }, { once: true });
}); */

/* let exp = "4+(\u221A(6+3+\u221A(49)))"
        function express(exp) {
             try {
    let matches = exp.matchAll(/(?<=\u221A)\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/gu);
    for (let match of matches) {
      if (match[0].includes("\u221A")) {
       match[0] = express(match[0])
      }
      exp = exp.replace(/\u221A\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/u,  Math.sqrt(eval(match[0])));
    }  
  
    return exp;
  } catch (err) {
    console.log("Shit");
  } 
        }
console.log(express(exp)) */
