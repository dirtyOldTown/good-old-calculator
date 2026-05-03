import { Calculator } from "./calculator.class.js";
import { EQUAL, ALL_CLEAR, CLEAR } from "../config/operators.js";

export class Computation extends Calculator {
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
    if (/\u03C0/gu.test(exp)) {
      exp = exp.replace(/\u03C0/gu, "3.14159")
    }

    if (/e/g.test(exp)) {
      exp = exp.replace(/e/g, "2.71828")
    }

    return exp;
  }
  
  getResult(displayResult) {
    EQUAL.addEventListener("click", (e) => {
      let expression = this.#getExpression();
      expression = this.#convertSymbolToNumber(expression);
      
      try {
        let result = +eval(expression).toFixed(7);
        displayResult.value = "= " + result;
      } catch (e) {
        console.log("Not-a-Number");
        displayResult.value = "0";
      }
    });
  }

  allClear(arr, expression, displayExp, displayResult) {
    ALL_CLEAR.onclick = () => {
      arr.length = 0;
      expression = "";
      displayExp.value = "";
      displayResult.value = "0";
      this.#removeExpression("expression");
    }
  }

  clear(arr, expression, displayExp, displayResult, isClicked) {
    CLEAR.onclick = () => {
      arr.pop();
      displayExp.value = displayExp.value.slice(0, -1);
      this.setExpression(displayExp.value);
    }
  }
}