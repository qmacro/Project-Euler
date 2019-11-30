// 7 - 10001st prime

module.exports = {
  run: _ => {

    const { reduce, concat, range, pipe, filter, max } = require('ramda')

    // These three functions taken from the solution 
    // to 3 - Largest prime factors

    // Is n evenly divisible by x?
    const isDivisible = (n, x) => n % x === 0

    // The factors of n; test from 2 up to the square root
    // of n, adding the other of the pair in each case. This 
    // list will deliberately not include 1 and n.
    const factors = n => reduce((a, x) =>
      concat(a, isDivisible(n, x) ? [x, n / x] : []),
      [],
      range(2, Math.sqrt(n) + 1)
    )

    // Test if x is prime by checking that there are no factors.
    const isPrime = x => factors(x).length === 0

    // Need to think about how to approach this part less procedurally
    const target = 10001
    let num = 1, index = 2
    while (index <= target) {
      num = num + 2
      if (isPrime(num)) index++
    }
    return num

  }
}