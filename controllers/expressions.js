export function updateRoughExpression(arr) {
   let expression = arr.map(item => item.textContent).join("");
   // Disable irregular zero
   if (/(?<!\.)\b0\d+/g.test(expression)) {
   expression = expression.replace(/(?<!\.)\b0\d+/g, "0");
  } 
  // Adding a multiplication sign after the parenthesis
  if(/(?<=\))[\d\(]/g.test(expression)) {
    expression = expression.replace(/(?<=\))[\d\(]/g, "*$&");
  }
  // Adding a multiplication sign before the parenthesis
  if(/(?<=\d)[\(]/g.test(expression)) {
    expression = expression.replace(/(?<=\d)[\(]/g, "*$&");
  }
  
  //localStorage.setItem("expression", expression);
  return expression;
}

/* let storage = localStorage.getItem("expression");
console.log(storage) */
