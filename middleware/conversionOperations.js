export function isLogarithm(exp) {
  return /(?<=log)\(.+?\)/.test(exp);
}

export function isSquareRoot(exp) {
  return /(?<=\u221A)\(.+?\)/gu.test(exp);
}

export function convertingSquareRootExpression(exp) {
  try {
    let matches = exp.matchAll(/(?<=\u221A)\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/gu);
    for (let match of matches) {
      if (match[0].includes("\u221A")) {
        match[0] = convertingSquareRootExpression(match[0]);
      }
      exp = exp.replace(/\u221A\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/u, Math.sqrt(eval(match[0])));
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
      if (match[0].includes("log")) {
        match[0] = convertingLogaritmExpression(match[0]);
      } else if (match[0].includes("\u221A")) {
        match[0] = convertingSquareRootExpression(match[0]);
      }
      exp = exp.replace(/log\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/u, Math.log10(eval(match[0])));
    }  
  
    return exp;
  } catch (err) {
    console.log("Not a number");
  } 
}


