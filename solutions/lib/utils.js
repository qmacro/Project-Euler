const { reduce, concat, range, uniq } = require('ramda')

// Is n evenly divisible by x?
const isDivisible = (n, x) => n % x === 0

// The factors of n; test from 2 up to the square root
// of n, adding the other of the pair in each case. This 
// list will deliberately not include 1 and n.
const factors = n => uniq(reduce((a, x) =>
  concat(a, isDivisible(n, x) ? [x, n / x] : []),
  [],
  range(1, Math.sqrt(n) + 1)
))

// Test if x is prime by checking that there are only two
// factors (1 and the number itself)
const isPrime = x => factors(x).length === 2

module.exports = {
  isDivisible,
  factors,
  isPrime
}
