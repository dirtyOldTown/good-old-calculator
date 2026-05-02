export class Calculator {

 getStartingExpression(arr) {
    let newArr = arr.map(item => item.textContent);
    return newArr.join("");
  }
  preventIncorrectEntry(arr, target) {
    switch(true) {
      case this.#preventIncorrectFirstEntry(arr, target):
        return;
        break;
      case this.#preventIncorrectOperator(arr, target):
        return;
        break;
      default: 
        arr.push(target);
    }
  }
  #preventIncorrectOperator(arr, target) {
  return arr.length > 0 && 
  (/[\+\/\*\-\(\.]/g.test(arr.at(-1).textContent) &&
  /[\+\/\*\-\)\.]/g.test(target.textContent)) &&
   !(/[\(]/g.test( arr.at(-1).textContent) &&
    /[\-]/g.test(target.textContent));
  }
  #preventIncorrectFirstEntry(arr, target) {
  return arr.length == 0 && 
  /[\+\/\*\.)]/g.test(target.textContent)
  }
  
  removeIncorrectEntry(arr, target) {
    this.#removeIncorrectDot(arr, target);
  }
  #removeIncorrectDot(arr, target) {
    if (arr.length > 0 &&
    /\b(\d+\.\d+\.)/g.test(this.getStartingExpression(arr))) {
      arr.pop();
    }
    
    if (arr.length > 0 &&
    /\b(\)\.)/g.test(this.getStartingExpression(arr))) {
      arr.pop();
    }

    if (arr.length > 0 &&
    /\p{L}[\.]|\.\p{L}|\p{L}\)\./gu.test(this.getStartingExpression(arr))) {
      arr.pop();
    }
  }

  updateRoughExpression(arr) {
  // Rough expression
   let expression = this.getStartingExpression(arr);
   // Disable irregular zero
   if (/(?<!\.)\b0\d+/g.test(expression)) {
   expression = expression.replace(/(?<!\.)\b0\d+/g, "0");
  } 
  // Adding a multiplication sign after the parenthesis
  if(/(?<=\))[\d\(\p{L}]/gu.test(expression)) {
    expression = expression.replace(/(?<=\))[\d\(\p{L}]/gu, "*$&");
  }
  // Adding a multiplication sign before the parenthesis
  if(/(?<=\d)[\(\p{L}]/gu.test(expression)) {
    expression = expression.replace(/(?<=\d)[\(\p{L}]/gu, "*$&");
  }

  if(/(?<=\p{L})[\(\p{L}\d]/gu.test(expression)) {
    expression = expression.replace(/(?<=\p{L})[\(\p{L}\d]/gu, "*$&");
  }

  return expression;
  }
}