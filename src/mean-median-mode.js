function getMean(arr) {
  return arr.reduce((carrier, value) => carrier + value, 0) / arr.length
}

function getMedian(arr) {
  if (arr.length % 2 == 0) {
    let index = Math.floor(arr.length / 2)
    return (arr[index] + arr[index + 1]) / 2
  }
  let index = Math.ceil(arr.length / 2)
  return arr[index]
}

function getMode(arr) {
  let freq = {}
  arr.forEach(value => {
    if (!freq[value]) {
      freq[value] = 0
    }
    freq[value] = freq[value] + 1
  })
  let tempMode = { value: '', freq: 0 }
  Object.keys(freq)
    .map(v => ({
      value: v,
      freq: freq[v]
    }))
    .forEach(obj => {
      if (obj.freq > tempMode.freq) {
        tempMode = obj
      }
    })
  return +tempMode.value
}

function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  }
}

module.exports = meanMedianMode
