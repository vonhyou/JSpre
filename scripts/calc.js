const calc = {
  read: () => {
    this.a = prompt('Please input a', 0)
    this.b = prompt('Please input b', 0)
  },

  sum: () => { return +this.a + +this.b },

  mult: () => { return this.a * this.b }
}

calc.read()

alert(calc.sum())
alert(calc.mult())
