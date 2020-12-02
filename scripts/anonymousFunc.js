function ask(question, ja, nein) {
  if (confirm(question)) ja()
  else nein()
}

function ja() {
  alert("you agree")
}

function nein() {
  alert("you disagree")
}

ask("Do you like chips?", ja, nein)