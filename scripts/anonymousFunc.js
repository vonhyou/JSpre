function ask(question, ja, nein) {
  if (confirm(question)) ja()
  else nein()
}

/*
function ja() {
  alert("you agree")
}

function nein() {
  alert("you disagree")
}

ask("Do you like chips?", ja, nein)
*/

ask("Do you like chips?",
  function() { alert("you agree") },
  function() { alert("you disagree") })