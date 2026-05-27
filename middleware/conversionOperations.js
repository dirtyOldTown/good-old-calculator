export function convertingSquareRootExpression(exp) {
  try {
    let matches = exp.matchAll(/(?<=\u221A)\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/gu);
    let index = 0;
    for (let match of matches) {
     while (match[index].includes("\u221A")) {
      match[index] = convertingSquareRootExpression((match[index]));
      } 
      while (match[index].includes("log")) {
      match[index] = convertingLogaritmExpression((match[index]));
      } 
     
      exp = exp.replace(/\u221A\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/u, Math.sqrt(eval(match[index])));
    }
    

    return exp;

  } catch (err) {
    console.log("Not a number");
  } 
}

export function convertingLogaritmExpression(exp) {
  try {
    let matches = exp.matchAll(/(?<=log)\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/gu);
    let index = 0;
    for (let match of matches) {
      while (match[index].includes("log")) {
        match[index] = convertingLogaritmExpression((match[index]));
      } 
      while (match[index].includes("\u221A")) {
        match[index] = convertingSquareRootExpression((match[index]));
      }
    
      exp = exp.replace(/log\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/u, Math.log10(eval(match[index])));
    }  
  
    return exp;

  } catch (err) {
    console.log("Not a number");
  } 
}


