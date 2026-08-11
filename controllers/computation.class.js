import { Calculator } from "./calculator.class.js";
import { EQUAL, ALL_CLEAR, CLEAR } from "../config/operators.js";
import { processingExpressionsUnderSquareRoot, processingLogaritmicExpressions,
  processingSineExpressions, processingCosineExpressions, convertSymbolToNumber,
  processingNaturalLogaritmicExpressions, processingExpressionsUnderCubeRoot,
  processingTangentExpressions } from "../middleware/conversionOperations.js";
import { DISPLAY_EXPRESSION } from "../config/elements.js";

export class Calculation extends Calculator {
  setExpression(key, exp) {
    localStorage.setItem(key, exp);
  }

  getExpression(key) {
    return localStorage.getItem(key);
  }

  removeExpression(exp) {
    localStorage.removeItem(exp);
  }
  #update(regexp, exp, callback) {
    while(regexp.test(exp)) {
    exp = callback(exp);
    break;
  } 

  return exp;
}
  updateExpression(exp) {
    exp = this.#update(/\u221A\(.+?\)/u, exp, processingExpressionsUnderSquareRoot);
    exp = this.#update(/\u221B\(.+?\)/u, exp, processingExpressionsUnderCubeRoot);
    exp = this.#update(/log\(.+?\)/u, exp, processingLogaritmicExpressions);
    exp = this.#update(/ln\(.+?\)/u, exp, processingNaturalLogaritmicExpressions);
    exp = this.#update(/sin\(.+?\)/u, exp, processingSineExpressions);
    exp = this.#update(/cos\(.+?\)/u, exp, processingCosineExpressions);
    exp = this.#update(/tan\(.+?\)/u, exp, processingTangentExpressions);

    return exp;
  }


  getResult(displayResult) {
    EQUAL.addEventListener("click", (e) => {
      let expression = this.getExpression("expression");
      DISPLAY_EXPRESSION.value = expression;
      expression = convertSymbolToNumber(expression);
      expression = this.updateExpression(expression);
      this.setExpression("result", expression)

      // Correction of the updating expression
      let updatingExpression = this.getExpression("result");
      if (/(\-\-)/g.test(updatingExpression)) {
        updatingExpression = updatingExpression.replaceAll(/(\-\-)/g, "+")
      }

      try {
        let result = +eval(updatingExpression).toFixed(7);
        displayResult.value = result;
      } catch (e) {
        console.log("Not-a-Number");
        displayResult.value = "NaN";
      }
    });
  }

  allClear(arr, expression, displayExp, displayResult) {
    ALL_CLEAR.onclick = () => {
      arr.length = 0;
      expression = "";
      displayExp.value = "";
      displayResult.value = "";
      this.setExpression("expression", "0");
      this.setExpression("result", "0");
    }
  }

  clear(arr, expression, displayExp, displayResult, isClicked) {
    CLEAR.onclick = (e) => {
      arr.pop();
      expression = this.getStartingExpression(arr);
      expression = this.updateRoughExpression(arr);
      this.setExpression("expression", expression);
      displayExp.value = expression;
      if (displayExp.value == "") {
         this.setExpression(0);
      }
    }
  }
}