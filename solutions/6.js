// 6 - Sum square difference

module.exports = {
  
  run: _ => {
    const { reduce, sum, map, range, compose } = require('ramda')
    const sqr = x => x * x
    const nums = range(1, 101)

    return compose(sqr, sum)(nums) - compose(sum, map(sqr))(nums)

  }
}