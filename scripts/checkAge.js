function checkAge(age) {
  // return (age > 18) ? true : confirm("Did your parents allow you?")
  return (age > 18) || confirm('Did parents allow you?');
}

alert(checkAge(19))