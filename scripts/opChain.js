// Optional Chaining `?.'
// obj?.prop
// obj?.[prop]
// obj.method?.()
// delete user?.name

const userAdmin = {
  firstName: 'John',

  admin () {
    alert('I am admin')
  }
}

alert(userAdmin.firstName)

alert(userAdmin?.lastName)
delete userAdmin?.firstName

userAdmin.admin()
alert(userAdmin?.firstName)
