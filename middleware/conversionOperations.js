export function isLogarithm(exp) {
  return /(?<=log)\(.+?\)/.test(exp);
}

export function isSquareRoot(exp) {
  return /(?<=\u221A)\(.+?\)/gu.test(exp);
}
