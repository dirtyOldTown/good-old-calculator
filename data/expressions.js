export function getStartingExpression(arr) {
  let newArr = arr.map(item => item.textContent);
  return newArr.join("");
}