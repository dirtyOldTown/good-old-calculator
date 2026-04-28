import { getStartingExpression } from "../data/expressions.js";

export function preventIncorrectEntry(arr, target) {
  switch(true) {
    case preventIncorrectFirstEntry(arr, target):
      return;
      break;
    case preventIncorrectOperator(arr, target):
      return;
      break;
    default: 
      arr.push(target);
  }
}
function preventIncorrectOperator(arr, target) {
  return arr.length > 0 && 
 (/[\+\/\*\-\(\.]/g.test(arr.at(-1).textContent) &&
  /[\+\/\*\-\)\.]/g.test(target.textContent)) &&
   !(/[\(]/g.test( arr.at(-1).textContent) &&
    /[\-]/g.test(target.textContent));
}

function preventIncorrectFirstEntry(arr, target) {
  return arr.length == 0 && 
  /[\+\/\*\.)]/g.test(target.textContent)
}

