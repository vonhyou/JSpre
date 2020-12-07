const user = {
  name: 'John',
  age: 30
}

const clone = Object.assign({}, user)
alert(clone.name)

const clone2 = { ...user }
alert(clone2.name)
