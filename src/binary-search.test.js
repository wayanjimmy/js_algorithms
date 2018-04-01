const binarySearch = require('./binary-search')

it('should return true', () => {
  expect(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56)).toBe(true)
})

it('should return false', () => {
  expect(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 72)).toBe(false)
})
