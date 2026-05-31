export function processingExpressionsUnderSquareRoot(exp) {
  try {
    let matches = exp.matchAll(/(?<=\u221A)\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/gu);
    for (let match of matches) {
      let matchingExpressionFound = match[0];

      matchingExpressionFound = solvingIntermediateExpressions(match, "\u221A", 
        processingExpressionsUnderSquareRoot);
      matchingExpressionFound = solvingIntermediateExpressions(match, "\u221B", 
        processingExpressionsUnderCubeRoot);
      matchingExpressionFound = solvingIntermediateExpressions(match, "log", 
        processingLogaritmicExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "ln", 
        processingNaturalLogaritmicExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "sin", 
        processingSineExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "cos", 
        processingCosineExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "tan", 
        processingTangentExpressions);
 
      exp = exp.replace(/\u221A\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/u, Math.sqrt(eval(matchingExpressionFound)));
    }

    return exp;

  } catch (err) {
    console.log("Not a number");
  } 
}

export function processingExpressionsUnderCubeRoot(exp) {
  try {
    let matches = exp.matchAll(/(?<=\u221B)\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/gu);
    for (let match of matches) {
      let matchingExpressionFound = match[0];

      matchingExpressionFound = solvingIntermediateExpressions(match, "\u221B", 
        processingExpressionsUnderCubeRoot);
      matchingExpressionFound = solvingIntermediateExpressions(match, "\u221A", 
        processingExpressionsUnderSquareRoot);
      matchingExpressionFound = solvingIntermediateExpressions(match, "log", 
        processingLogaritmicExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "ln", 
        processingNaturalLogaritmicExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "sin", 
        processingSineExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "cos", 
        processingCosineExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "tan", 
        processingTangentExpressions);
 
      exp = exp.replace(/\u221B\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/u, Math.cbrt(eval(matchingExpressionFound)));
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

      matchingExpressionFound = solvingIntermediateExpressions(match, "log", 
        processingLogaritmicExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "ln", 
        processingNaturalLogaritmicExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "\u221A", 
        processingExpressionsUnderSquareRoot);
      matchingExpressionFound = solvingIntermediateExpressions(match, "\u221B", 
        processingExpressionsUnderCubeRoot);
      matchingExpressionFound = solvingIntermediateExpressions(match, "sin", 
        processingSineExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "cos", 
        processingCosineExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "tan", 
         processingTangentExpressions);
    
      exp = exp.replace(/log\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/u, Math.log10(eval(matchingExpressionFound)));
    }  
  
    return exp;

  } catch (err) {
    console.log("Not a number");
  } 
}
export function processingNaturalLogaritmicExpressions(exp) {
  try {
    let matches = exp.matchAll(/(?<=ln)\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/gu);
    for (let match of matches) {
      let matchingExpressionFound = match[0];
      
      matchingExpressionFound = solvingIntermediateExpressions(match, "ln", 
        processingNaturalLogaritmicExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "log", 
        processingLogaritmicExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "\u221A", 
        processingExpressionsUnderSquareRoot);
      matchingExpressionFound = solvingIntermediateExpressions(match, "\u221B", 
        processingExpressionsUnderCubeRoot);
      matchingExpressionFound = solvingIntermediateExpressions(match, "sin", 
        processingSineExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "cos", 
        processingCosineExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "tan", 
         processingTangentExpressions);
    
      exp = exp.replace(/ln\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/u, Math.log(eval(matchingExpressionFound)));
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

      matchingExpressionFound = solvingIntermediateExpressions(match, "sin", 
        processingSineExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "\u221A", 
        processingExpressionsUnderSquareRoot);
      matchingExpressionFound = solvingIntermediateExpressions(match, "\u221B", 
        processingExpressionsUnderCubeRoot);
      matchingExpressionFound = solvingIntermediateExpressions(match, "log", 
        processingLogaritmicExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "ln", 
        processingNaturalLogaritmicExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "cos", 
        processingCosineExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "tan", 
        processingTangentExpressions);
    
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
      
      matchingExpressionFound = solvingIntermediateExpressions(match, "cos", 
        processingCosineExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "\u221A", 
        processingExpressionsUnderSquareRoot);
      matchingExpressionFound = solvingIntermediateExpressions(match, "\u221B", 
        processingExpressionsUnderCubeRoot);
      matchingExpressionFound = solvingIntermediateExpressions(match, "log", 
        processingLogaritmicExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "ln", 
        processingNaturalLogaritmicExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "sin", 
        processingSineExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "tan", 
         processingTangentExpressions);
    
      exp = exp.replace(/cos\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/u, Math.cos(eval(matchingExpressionFound)));
    }  
  
    return exp;

  } catch (err) {
    console.log("Not a number");
  } 
}

export function processingTangentExpressions(exp) {
  try {
    let matches = exp.matchAll(/(?<=tan)\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/gu);
    for (let match of matches) {
      let matchingExpressionFound = match[0];

      matchingExpressionFound = solvingIntermediateExpressions(match, "tan", 
         processingTangentExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "cos", 
        processingCosineExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "\u221A", 
        processingExpressionsUnderSquareRoot);
      matchingExpressionFound = solvingIntermediateExpressions(match, "\u221B", 
        processingExpressionsUnderCubeRoot);
      matchingExpressionFound = solvingIntermediateExpressions(match, "log", 
        processingLogaritmicExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "ln", 
        processingNaturalLogaritmicExpressions);
      matchingExpressionFound = solvingIntermediateExpressions(match, "sin", 
        processingSineExpressions);
    
      exp = exp.replace(/tan\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/u, Math.tan(eval(matchingExpressionFound)));
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

export function convertSymbolToNumber(exp) {
    // Convert symbol 'PI' to number
    exp = convert(/\u03C0/gu, exp, Math.PI);
    // Convert symbol 'e' to number
    exp = convert(/e/g, exp, Math.E);
    if (/\u00D7/g.test(exp)) {
      exp = exp.replace(/\u00D7/g, "*");
    }
    return exp; 
  }

  function convert(regexp, exp, replacement) {
    if (regexp.test(exp)) {
      exp = exp.replace(regexp, replacement);
    }
    
    return exp;
  }

