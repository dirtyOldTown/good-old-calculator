import { getStartingExpression } from "../data/expressions.js";

export function removeIncorrectEntry(arr) {
  removeIncorrectDot(arr);
}

function removeIncorrectDot(arr) {
  if (arr.length > 0 &&
  /\b(\d+\.\d+\.)/g.test(getStartingExpression(arr))) {
    arr.pop();
  }
  
  if (arr.length > 0 &&
  /\b(\)\.)/g.test(getStartingExpression(arr))) {
    arr.pop();
  }
}