type User=({name: String, email: String, isPaid: Boolean})

function createUser(users: User):User{
  return users
}

createUser({name: "", email:"", isPaid: true})