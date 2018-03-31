const twoSum = require('./twosum')

it('should return [[6,1], [3,4], [3,4]]', () => {
  expect(twoSum([1, 6, 4, 5, 3, 3], 7)).toEqual([[6,1], [3,4], [3,4]])
})
