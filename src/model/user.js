const mongoose = require('../common/dbConfig');

require('dotenv').config()


const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
}, {
  collection: 'users',
  versionKey: false
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;