export function processingExpressionsUnderSquareRoot(exp) {
  try {
    let matches = exp.matchAll(/(?<=\u221A)\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/gu);
    for (let match of matches) {
      let matchingExpressionFound = match[0];

      matchingExpressionFound = solvingIntermediateExpressions(match, "\u221A", processingExpressionsUnderSquareRoot);
      matchingExpressionFound = solvingIntermediateExpressions(match, "log", processingLogaritmicExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "sin", processingSineExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "cos", processingCosineExpressions);
 
      exp = exp.replace(/\u221A\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/u, Math.sqrt(eval(matchingExpressionFound)));
    }
    

    return exp;

  } catch (err) {
    console.log("Not a number");
  } 
}

export function processingLogaritmicExpressions(exp) {
  try {
    let matches = exp.matchAll(/(?<=log)\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/gu);
    for (let match of matches) {
      let matchingExpressionFound = match[0];

      matchingExpressionFound = solvingIntermediateExpressions(match, "log", processingLogaritmicExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "\u221A", processingExpressionsUnderSquareRoot);
      matchingExpressionFound = solvingIntermediateExpressions(match, "sin", processingSineExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "cos", processingCosineExpressions);
    
      exp = exp.replace(/log\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/u, Math.log10(eval(matchingExpressionFound)));
    }  
  
    return exp;

  } catch (err) {
    console.log("Not a number");
  } 
}

export function processingSineExpressions(exp) {
  try {
    let matches = exp.matchAll(/(?<=sin)\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/gu);
    for (let match of matches) {
      let matchingExpressionFound = match[0];

      matchingExpressionFound = solvingIntermediateExpressions(match, "sin", processingSineExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "\u221A", processingExpressionsUnderSquareRoot);
      matchingExpressionFound = solvingIntermediateExpressions(match, "log", processingLogaritmicExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "cos", processingCosineExpressions);
    
      exp = exp.replace(/sin\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/u, Math.sin(eval(matchingExpressionFound)));
    }  
  
    return exp;

  } catch (err) {
    console.log("Not a number");
  } 
}
export function processingCosineExpressions(exp) {
  try {
    let matches = exp.matchAll(/(?<=cos)\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/gu);
    for (let match of matches) {
      let matchingExpressionFound = match[0];
      
      matchingExpressionFound = solvingIntermediateExpressions(match, "cos", processingCosineExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "\u221A", processingExpressionsUnderSquareRoot);
      matchingExpressionFound = solvingIntermediateExpressions(match, "log", processingLogaritmicExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "sin", processingSineExpressions);
    
      exp = exp.replace(/cos\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/u, Math.cos(eval(matchingExpressionFound)));
    }  
  
    return exp;

  } catch (err) {
    console.log("Not a number");
  } 
}

function solvingIntermediateExpressions(match, symbol, callback) {
  while (match[0].includes(symbol)) {
    match[0] = callback((match[0]));
  } 

  return match[0];
}

// Final update expression middleware
export function update(regexp, exp, callback) {
  while(regexp.test(exp)) {
    exp = callback(exp);
  } 

  return exp;
}