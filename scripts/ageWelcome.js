let age = prompt("how old are you?", 18)

/*
let welcome = (age > 18) ?
  function() { alert("welcome!") } :
  function() { alert("guna!") }
*/

let welcome = (age > 18) ?
  () => alert("welcome!") :
  () => alert("guna!")

welcome()