// 2 - Even Fibonacci numbers

module.exports = {
  run: _ => {

    const { concat, sum, filter } = require('ramda')

    const fibGen = (x = 0) => {
      const fib = (a = 0, b = 1) => (a > x) ? [] : [a].concat(fib(b, a + b))
      return fib()
    }
    const isEven = x => x % 2 === 0

    return sum(filter(isEven, fibGen(4000000)))

  }
}