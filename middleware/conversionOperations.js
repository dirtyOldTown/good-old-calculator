export function convertingSquareRootExpression(exp) {
  try {
    let matches = exp.matchAll(/(?<=\u221A)\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/gu);
    for (let match of matches) {
      let matchingExpressionFound = match[0];
      /* while (match[0].includes("\u221A")) {
      match[0] = convertingSquareRootExpression((match[0]));
      }  */
      matchingExpressionFound = matchConverting(match, "\u221A", convertingSquareRootExpression);
      matchingExpressionFound = matchConverting(match, "log", convertingLogaritmExpression);
      matchingExpressionFound = matchConverting(match, "sin", convertingSinusExpression);
    /*   while (match[0].includes("log")) {
      match[0] = convertingLogaritmExpression((match[0]));
      }  */
     /*  while (match[0].includes("sin")) {
        match[0] = convertingSinusExpression((match[0]));
      }  */
     
      exp = exp.replace(/\u221A\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/u, Math.sqrt(eval(matchingExpressionFound)));
    }
    

    return exp;

  } catch (err) {
    console.log("Not a number");
  } 
}

export function convertingLogaritmExpression(exp) {
  try {
    let matches = exp.matchAll(/(?<=log)\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/gu);
    for (let match of matches) {
      let matchingExpressionFound = match[0];
      matchingExpressionFound = matchConverting(match, "log", convertingLogaritmExpression);
      matchingExpressionFound = matchConverting(match, "\u221A", convertingSquareRootExpression);
      matchingExpressionFound = matchConverting(match, "sin", convertingSinusExpression);
  /*     while (match[0].includes("log")) {
        match[0] = convertingLogaritmExpression((match[0]));
      } 
      while (match[0].includes("\u221A")) {
        match[0] = convertingSquareRootExpression((match[0]));
      }
      while (match[0].includes("sin")) {
        match[0] = convertingSinusExpression((match[0]));
      }  */
    
      exp = exp.replace(/log\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/u, Math.log10(eval(matchingExpressionFound)));
    }  
  
    return exp;

  } catch (err) {
    console.log("Not a number");
  } 
}

export function convertingSinusExpression(exp) {
  try {
    let matches = exp.matchAll(/(?<=sin)\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/gu);
    for (let match of matches) {
      let matchingExpressionFound = match[0];
      matchingExpressionFound = matchConverting(match, "sin", convertingSinusExpression);
      matchingExpressionFound = matchConverting(match, "\u221A", convertingSquareRootExpression);
      matchingExpressionFound = matchConverting(match, "log", convertingLogaritmExpression);
   /*    while (match[0].includes("sin")) {
        match[0] = convertingSinusExpression((match[0]));
      } 
      while (match[0].includes("log")) {
        match[0] = convertingLogaritmExpression((match[0]));
      } 
      while (match[0].includes("\u221A")) {
        match[0] = convertingSquareRootExpression((match[0]));
      } */
    
      exp = exp.replace(/sin\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/u, Math.sin(eval(matchingExpressionFound)));
    }  
  
    return exp;

  } catch (err) {
    console.log("Not a number");
  } 
}

function matchConverting(match, symbol, callback) {
  while (match[0].includes(symbol)) {
    match[0] = callback((match[0]));
  } 

  return match[0];
}