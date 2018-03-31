function twoSum(numArray, sum) {
  let pairs = []
  let hashtable = []

  for (let i = 0; i < numArray.length; i++) {
    const currNum = numArray[i]
    const counterpart = sum - currNum

    if (hashtable.indexOf(counterpart) !== -1) {
      pairs.push([currNum, counterpart])
    }
    hashtable.push(currNum)
  }

  return pairs
}

module.exports = twoSum
