function min(a, b) {
  return a > b ? b : a
}

function pow(x, n) {
  let res = x;
  for (let i = 1; i < n; ++i)
    res *= x
  return res 
}

let a = prompt("Input A", 0), b = prompt("Input B", 0)

alert(min(a, b))

let x = prompt("Input x", 1), n = prompt("Input n", 1)

alert(pow(x, n))