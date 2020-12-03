const age = prompt('how old are you?', 18)

/*
let welcome = (age > 18) ?
  function() { alert("welcome!") } :
  function() { alert("guna!") }
*/

const welcome = (age > 18)
  ? () => alert('welcome!')
  : () => alert('guna!')

welcome()
