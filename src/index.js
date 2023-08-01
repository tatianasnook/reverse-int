module.exports = function reverse (n) {
  n = Math.abs(n)
  n = String(n)
  let result = n.split('').reverse().join('');
  return Number(result)
}
