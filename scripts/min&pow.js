function min (a, b) {
  return a > b ? b : a
}

function pow (x, n) {
  let res = x
  for (let i = 1; i < n; ++i) { res *= x }
  return res
}

const a = prompt('Input A', 0); const b = prompt('Input B', 0)

alert(min(a, b))

const x = prompt('Input x', 1); const n = prompt('Input n', 1)

alert(pow(x, n))
