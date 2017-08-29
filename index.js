function countdown(callback) {
  window.setTimeout(callback)
}

function createMultiplier(multiplierValue) {
  return function(numberToUseAndMultiple) {
    return multiplierValue * numberToUseAndMultiple
  }
}
var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(firstNum, secondNum) {
 return firstNum * secondNum
}

var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)
