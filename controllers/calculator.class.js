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
    (/[\+\/\*\-\(\.gns\u221A\u221B]/gu.test(arr.at(-1).dataset.value) &&
    /[\+\/\*\-\)\.]/g.test(target.dataset.value)) &&
    !(/[\(gns\u221A\u221B]/gu.test( arr.at(-1).dataset.value) &&
    /[\-]/g.test(target.dataset.value));
  }
  #preventIncorrectFirstEntry(arr, target) {
  return arr.length == 0 && 
  /[\+\/\*\.)]/g.test(target.dataset.value)
  }
  
  removeIncorrectEntry(arr, target) {
    this.#removeIncorrectPeriod(arr, /\b(\d+\.\d+\.)/g, target, this.getStartingExpression);
    this.#removeIncorrectPeriod(arr, /[\p{L}\u221A\u221B][\.]|\.[\p{L}\u221A\u221B]|[\p{L}\u221A\u221B]\)\./gu, 
      target, this.getStartingExpression);
  }
  #removeIncorrectPeriod(arr, regexp, target, callback) {
    if (arr.length > 0 &&
      regexp.test(callback(arr))) {
      arr.pop();
    }
  }

  updateRoughExpression(arr, target) {
    // Get rough expression
    let expression = this.getStartingExpression(arr);

    // Disable irregular zero
    expression = this.#replace(/(?<!\.)\b0\d+/g, expression, "0");

    //Adding a left parenthesis after advanced operators
    expression = this.#replace(/log|sin|cos|ln|tan|\u221A|\u221B/g, 
      expression, "$&(");

    // Adding a multiplication sign after right parenthesis
    expression = this.#replace(/(?<=\))[\d\(\u03C0\u0065\u221A\u221Blsct]/gu, 
      expression, "*$&");

    // Adding a multiplication sign between numbers and advanced operators
    expression = this.#replace(/(?<=\d)[\(\u03C0\u0065\u221A\u221Blsct]/gu, 
      expression, "*$&");

    // Adding a multiplication sign between advanced operators
    expression = this.#replace(/(?<=[\u03C0\u0065])[\(\u03C0\u0065\u221A\u221Blsct\d]/gu, 
      expression, "*$&");
      
    // Deleting an extra right parenthesis and a period after the right parenthesis
    expression = this.#fixParentheticalExpression(arr, expression);

    return expression;
  }

  #replace(regexp, exp, replace) {
    if (regexp.test(exp)) {
      exp = exp.replace(regexp, replace)
    }

    return exp;
  }
  #fixParentheticalExpression(arr, expression) {
    let leftBrackets = expression.match(/\(/g)?.length ?? 0;
    let rightBrackets = expression.match(/\)/g)?.length ?? 0;

    if (rightBrackets > leftBrackets) {
      arr.pop();
      expression = expression.slice(0, -1);
    }

    if (/\)+\./g.test(expression)) {
      arr.pop();
      expression = expression.slice(0, -1);
  }

    return expression;
  }
}


