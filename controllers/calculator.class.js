export class Calculator {

 getStartingExpression(arr) {
    let newArr = arr.map(item => item.dataset.value);
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
  (/[\+\/\*\-\(\.g\u221A]/gu.test(arr.at(-1).dataset.value) &&
  /[\+\/\*\-\)\.]/g.test(target.dataset.value)) &&
   !(/[\(g\u221A]/gu.test( arr.at(-1).dataset.value) &&
    /[\-]/g.test(target.dataset.value));
  }
  #preventIncorrectFirstEntry(arr, target) {
  return arr.length == 0 && 
  /[\+\/\*\.)]/g.test(target.dataset.value)
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
    /[\p{L}\u221A][\.]|\.[\p{L}\u221A]|[\p{L}\u221A]\)\./gu.test(this.getStartingExpression(arr))) {
      arr.pop();
    }
  }
  #removeIncorectRightBracket(arr, expression) {
    let leftBrackets = expression.match(/\(/g)?.length ?? 0;
    let rightBrackets = expression.match(/\)/g)?.length ?? 0;

    if (rightBrackets > leftBrackets) {
      arr.pop();
      expression = expression.slice(0, -1);
    }

    return expression;
  }

  updateRoughExpression(arr, target) {
  // Rough expression
   let expression = this.getStartingExpression(arr);
   // Disable irregular zero
   if (/(?<!\.)\b0\d+/g.test(expression)) {
   expression = expression.replace(/(?<!\.)\b0\d+/g, "0");
  } 
  // Adding a multiplication sign after right parenthesis
  if(/(?<=\))[\d\(\u03C0\u0065\u221Al]/gu.test(expression)) {
    expression = expression.replace(/(?<=\))[\d\(\u03C0\u0065\u221Al]/gu, "*$&");
  }
  //Adding a left parenthesis after advanced operators
   if(/log|\u221A/g.test(expression)) {
    expression = expression.replace(/log|\u221A/g, "$&(");
  }
  // Adding a multiplication sign between numbers and advanced operators
  if(/(?<=\d)[\(\u03C0\u0065\u221Al]/gu.test(expression)) {
    expression = expression.replace(/(?<=\d)[\(\u03C0\u0065\u221Al]/gu, "*$&");
  }
  // Adding a multiplication sign between advanced operators
  if(/(?<=[\u03C0\u0065])[\(\u03C0\u0065\u221Al\d]/gu.test(expression)) {
    expression = expression.replace(/(?<=[\u03C0\u0065])[\(\u03C0\u0065\u221Al\d]/gu, "*$&");
  }
  // Deleting a period after the right parenthesis
  if (/\)+\./g.test(expression)) {
    arr.pop();
    expression = expression.slice(0, -1);
  }
  // Deleting an extra right parenthesis
  expression = this.#removeIncorectRightBracket(arr, expression);

  return expression;
  }
}


