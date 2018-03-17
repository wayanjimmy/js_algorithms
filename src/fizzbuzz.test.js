const fizzbuzz = require('./fizzbuzz')

it('3 should return Fizz', () => {
  expect(fizzbuzz(3)).toBe('Fizz')
})

it('5 should return Buzz', () => {
  expect(fizzbuzz(5)).toBe('Buzz')
})

it('15 should return Fizz', () => {
  expect(fizzbuzz(15)).toBe('FizzBuzz')
})

it('7 should return 7', () => {
  expect(fizzbuzz(7)).toBe('7')
})
