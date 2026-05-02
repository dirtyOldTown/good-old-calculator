import { Calculator } from "./calculator.class.js";
import { ALL_CLEAR, CLEAR } from "../config/operators.js";
import { getStartingExpression } from "../data/expressions.js";

export class Operation extends Calculator {

  allClear(arr, expression, displayExp, displayResult) {
    ALL_CLEAR.onclick = () => {
      arr.length = 0;
      expression = "";
      displayExp.value = "";
      displayResult.value = "";
      localStorage.removeItem("expression");
    }
  }
  clear(arr, expression, displayExp, displayResult, isClicked) {
    CLEAR.onclick = () => {
      arr.pop();
      displayExp.value = displayExp.value.slice(0, -1);
      localStorage.setItem("expression", displayExp.value);
    }
  }
}