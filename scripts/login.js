let username = prompt("Who's there?")

if (username === "Cancel") {
  alert("Canceled")
} else if (username === "Admin") {
  let pwd = prompt("Your key, please.")

  if (pwd === "Cancel") {
    alert("Canceled")
  } else if (pwd === "TheMaster") {
    alert("welcome!")
  } else {
    alert("Wrong password!")
  }
} else {
  alert("I don't know you.")
}