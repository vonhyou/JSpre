let age = prompt("how old are you?", 18)

let welcome = (age > 18) ?
  function() { alert("welcome!") } :
  function() { alert("guna!") }

welcome()