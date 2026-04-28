export function updateExpression(roughExpression, expression) {
  if (/(?<!\.)\b0\d+/g.test(roughExpression)) {
   expression = roughExpression.replace(/(?<!\.)\b0\d+/g, "0");
  } else {
    expression = roughExpression;
  }

  return expression;
}