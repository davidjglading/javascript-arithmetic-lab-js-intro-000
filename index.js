



function add(a, b) {
  20 + 30
  returns('20 + 30 = 50')
}

function subtract(a, b) {
  30 - 20
  returns('30 - 20 = 10')
}

function multiply(a, b) {
  30 * 20
  returns('30 * 20 = 600')
}

function divide(a, b) {
  600 / 30
  returns('600 / 30 = 20')
}

function add5(number) {
  number += 5
  expect(increment(number))toEqual(number + 5)
}
