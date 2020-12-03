const username = prompt("Who's there?")

if (username === '' || username === null) {
  alert('Canceled')
} else if (username === 'Admin') {
  const pwd = prompt('Your key, please.')

  if (pwd === '' || pwd == null) {
    alert('Canceled')
  } else if (pwd === 'TheMaster') {
    alert('welcome!')
  } else {
    alert('Wrong password!')
  }
} else {
  alert("I don't know you.")
}
