// 5 - Smallest multiple

module.exports = {
  run: _ => {

    const { range, curry, map, allPass, not, reduce } = require('ramda')

    // const divisors = range(11, 21)
    // const isFactor = curry((x, n) => n % x === 0)
    // const checkAll = map(isFactor, divisors)

    // let i = 10
    // while(not(allPass(checkAll)(i))) {
    //   i = i + 2
    // }
    // console.log(i)

    // Much faster from Joseph 
    const gcd2 = (a, b) => b === 0 ? a : gcd2(b, a % b)
    const lcm = reduce((a, i) => (a * i) / gcd2(a, i), 1)
    return lcm(range(1,21))


  }
}