const User = require('./user');

// Create a new user
const newUser = new User({
  name: 'ram sharma',
  email: 'ram@example.com',
  password: 'password123'
});
// // create
newUser.save()
  .then(() => console.log('User created'))
  .catch((err) => console.log(err));

  // Read all users
// User.find()
// .then((users) => console.log(users))
// .catch((err) => console.log(err));

// Update a user
// User.findOneAndUpdate({ name: 'John Doe' }, { name: 'Ram Doe' })
//   .then(() => console.log('User updated'))
//   .catch((err) => console.log(err));
// Delete a user
// User.deleteOne({ name: 'Ram Doe' })
//   .then(() => console.log('User deleted'))
//   .catch((err) => console.log(err));