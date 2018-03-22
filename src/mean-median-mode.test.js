const meanMedianMode = require('./mean-median-mode')

it('should return { mean: 5.166666666666667, median: 6, mode: 4 }', () => {
  expect(meanMedianMode([4, 5, 6, 9, 3, 4])).toEqual({
    mean: 5.166666666666667,
    median: 6,
    mode: 4
  })
})
