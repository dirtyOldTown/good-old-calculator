import { Calculator } from "./calculator.class.js";
import { EQUAL, ALL_CLEAR, CLEAR } from "../config/operators.js";
import { isLogarithm, isSquareRoot} from "../middleware/conversionOperations.js";
import { DISPLAY_EXPRESSION } from "../config/elements.js";
export class Calculation extends Calculator {
  setExpression(exp) {
    localStorage.setItem("expression", exp);
  }

  #getExpression() {
    return localStorage.getItem("expression");
  }

  #removeExpression(exp) {
    localStorage.removeItem(exp);
  }

  #convertSymbolToNumber(exp) {
    // Convert symbol 'PI' to number
    if (/\u03C0/gu.test(exp)) {
      exp = exp.replace(/\u03C0/gu, Math.PI);
    }
    // Convert symbol 'e' to number
    if (/e/g.test(exp)) {
      exp = exp.replace(/e/g, Math.E);
    }
    return exp; 
  }

  #convertExpressionToNumber(exp) {
    // Calculation of logarithms in expression
    if (isLogarithm(exp)) {
      try {
        let matches = exp.matchAll(/(?<=log)\(.+?\)/gu);
        for (let match of matches) {
          exp = exp.replace(/log\(.+?\)/u,  Math.log10(eval(match[0])));
        }
      } catch (e) {
        console.log("SHIT");
      }
    }
    // Calculation of square roots in expression
    if (isSquareRoot(exp)) {
      try {
        let matches = exp.matchAll(/(?<=\u221A)\(.+?\)/gu);
        for (let match of matches) {
        exp = exp.replace(/\u221A\(.+?\)/u,  Math.sqrt(eval(match[0])));
      }
      } catch (e) {
        console.log("SHIT")
      }
    }

    return exp;
  }

  getResult(displayResult) {
    EQUAL.addEventListener("click", (e) => {
      let expression = this.#getExpression();
      DISPLAY_EXPRESSION.value = expression + "=";
      expression = this.#convertSymbolToNumber(expression);
      expression = this.#convertExpressionToNumber(expression);
      try {
        displayResult.style.color = "";
        let result = +eval(expression).toFixed(7);
        displayResult.value = result;
      } catch (e) {
        displayResult.style.color = "#b96746";
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
      displayResult.value = "0";
      this.setExpression("0");
    }
  }

  clear(arr, expression, displayExp, displayResult, isClicked) {
    CLEAR.onclick = () => {
      arr.pop();
      displayExp.value = displayExp.value.slice(0, -1);
      this.setExpression(displayExp.value);
      if (displayExp.value == "") {
         this.setExpression(0);
      }
    }
  }
}