const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: Number,
  username: String,
  email: String,
  password: String,
  notifications: [{
    bookId: Number,
    time: String,
    image: String
  }],
  purchasedBooks: [Number],
  favoriteBooks: [Number], 
  cart: [Number]
});

const User = mongoose.model('Users', userSchema);

module.exports = User;