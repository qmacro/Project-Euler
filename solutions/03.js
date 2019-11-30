// 3 - Largest prime factor
const { pipe, filter, reduce, max } = require('ramda')
const { factors, isPrime } = require('./lib/utils')

module.exports = {
  run: _ => {

    // Compute the answer with a simple pipeline.
    return pipe(factors, filter(isPrime), reduce(max, 0))(600851475143)
    
  }
}