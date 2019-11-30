// 9 - Special Pythagorean tripllet

// Not particularly Ramda style right now

const { sum, product } = require('ramda')
const isPythagorean = ([a, b, c]) => (a ** 2) + (b ** 2) === (c ** 2)
const max = 1000

module.exports = {
  run: _ => {
    for (var a = 1; a < max; a++) {
      for (var b = a + 1; b < max; b++) {
        for (var c = b + 1; c < max; c++) {
          const nums = [a, b, c]
          if (isPythagorean(nums) && sum(nums) === max) console.log(product(nums))
        }
      }
    }
  }
}