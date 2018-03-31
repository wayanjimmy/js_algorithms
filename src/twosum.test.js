const twoSum = require('./twosum')

it('should return [[6,1], [3,4], [3,4]]', () => {
  expect(twoSum([1, 6, 4, 5, 3, 3], 7)).toEqual([[6, 1], [3, 4], [3, 4]])
})

it('should return [[17,11], [-12,40]]', () => {
  expect(twoSum([40, 11, 19, 17, -12], 28)).toEqual([[17, 11], [-12, 40]])
})
