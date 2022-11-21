const {mongoose} = require('../DBHelper')

const Schema = mongoose.Schema
const modelSchema = new Schema({
  'name': String,
  'age': Number,
  'email': String
})

const userModel = mongoose.model('users',modelSchema);

exports.userModel = userModel

