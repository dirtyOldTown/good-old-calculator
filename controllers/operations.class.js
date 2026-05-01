import { Calculator } from "./calculator.class.js";
import { ALL_CLEAR, CLEAR } from "../config/operators.js";

export class Operation extends Calculator {

  allClear(arr, expression, mainTable) {
    ALL_CLEAR.onclick = () => {
      arr.length = 0;
      expression = "";
      mainTable.value = "";
    }
  }
  clear(arr, expression, mainTable) {
    CLEAR.onclick = () => {
      arr.pop();
      mainTable.value = mainTable.value.slice(0, -1)
    }
  }
}