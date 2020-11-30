// prompt("year", 100); // Only a prompt
/*
let age = prompt("How old are you?", 100);

alert(`You are ${age} years old!`);
*/

let name = prompt("What's your name?")

// empty input is not undefined, it's ""

if (name == "") {
  alert("Hello, Anonymous!")
} else {
  alert(`Your are ${name}, right?`)
}