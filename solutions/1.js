// 1 - Multiples of 3 and 5

module.exports = {
  run: _ => {

    const { curry, anyPass, pipe, filter, sum, range } = require('ramda')

    const isMultipleOf = curry((x, n) => n % x === 0)
    const isMultipleOfThreeOrFive = anyPass([isMultipleOf(3), isMultipleOf(5)])

    return pipe(
      filter(isMultipleOfThreeOrFive),
      sum
    )(range(1, 1000))

  }
}