const fibonacci = require('./fibonacci')

it('should return 3', () => {
  expect(fibonacci(4)).toBe(3)
})

it ('should return 34', () => {
  expect(fibonacci(9)).toBe(34)
})
