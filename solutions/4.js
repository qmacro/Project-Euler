// 4 - Largest palindrome product

module.exports = {
  
  run: _ => {

    const { equals, juxt, identity, reverse, reduce, max, range, pipe, lift, filter } = require('ramda')

    const isPalindrome = x => equals(...juxt([identity, reverse])(String(x)))
    const maximum = reduce(max, 0)

    const xs = range(1, 1000)
    const ys = range(1, 1000)

    return pipe(
      lift((a, b) => a * b),
      filter(isPalindrome),
      maximum
    )(xs, ys)

  }
}