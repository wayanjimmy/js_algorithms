function getMean(arr) {
  return arr.reduce((carrier, value) => carrier + value, 0) / arr.length
}

function getMedian(arr) {
  arr = arr.sort((a, b) => a - b)
  if (arr.length % 2 == 0) {
    let index = Math.floor(arr.length / 2)
    return (arr[index] + arr[index - 1]) / 2
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
  let maxFrequency = 0
  let mode = []
  for (let i in freq) {
    if (freq[i] > maxFrequency) {
      mode = [i]
      maxFrequency = freq[i]
    } else if (freq[i] === maxFrequency) {
      mode.push(i)
    }
  }
  if (mode.length === Object.keys(freq).length) {
    return []
  }

  return mode.map(value => +value)
}

function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  }
}

module.exports = meanMedianMode
