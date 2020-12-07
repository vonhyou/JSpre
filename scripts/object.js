/* Task 1
const user = {}

user.name = 'John'
user.surname = 'Smith'

alert(user.name)

user.name = 'Pete'
alert(user.name)

delete user.name
alert(user.name)

alert(user.surname)
*/

/* Task 2
function isEmpty(obj) {
  for (let key in obj) return false
  return true
}

let obj = {}

alert(isEmpty(obj))

obj.key = 'hello, world!'
alert(isEmpty(obj))
*/

/* Task 3
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0

for (const key in salaries) { sum += salaries[key] }

alert(sum)
*/

const menu = {
  width: 200,
  height: 300,
  title: 'My menu'
}

multiplyMenu(menu)

function multiplyMenu (menu) {
  for (const key in menu) {
    if (typeof menu[key] === 'number') { menu[key] *= 2 }
  }
}

alert(menu.width)
alert(menu.title)
