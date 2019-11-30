// 10 - Summation of primes

const { pipe, filter, range, sum } = require('ramda')
const { factors, isPrime } = require('./lib/utils')

module.exports = {
  run: _ => {
    return pipe(
      range(1),
      filter(x => x % 2),
      filter(isPrime),
      sum
    )(2000000) + 2


  }
}