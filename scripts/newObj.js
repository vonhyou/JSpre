// Constructor Function:
// Named with capital letter first
// Executed with `new` only

function Accumulator (startingValue) {
  this.value = startingValue ?? 0

  this.read = function () { this.value += +prompt('So, next?', 0) }
}

const accu = new Accumulator()

alert(accu.value)

accu.read()
alert(accu.value)

accu.read()
alert(accu.value)
