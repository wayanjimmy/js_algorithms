const reverseArrayInPlace = require('./reverse-array-in-place')

it('should return [ 0, 8, 7, 4, 5 ]', () => {
  expect(reverseArrayInPlace([5, 4, 7, 8, 0])).toEqual([0, 8, 7, 4, 5])
})
