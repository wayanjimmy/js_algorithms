const meanMedianMode = require('./mean-median-mode')

it('should return { mean: 5.166666666666667, median: 4.5, mode: [4]}', () => {
  // 3, 4, 4, 5, 6, 9
  expect(meanMedianMode([4, 5, 6, 9, 3, 4])).toEqual({
    mean: 5.166666666666667,
    median: 4.5,
    mode: [4]
  })
})

it('should return { mean: 2, median: 2, mode: []}', () => {
  // 1, 1, 2, 2, 3, 3
  expect(meanMedianMode([2, 1, 3, 3, 2, 1])).toEqual({
    mean: 2,
    median: 2,
    mode: []
  })
})
