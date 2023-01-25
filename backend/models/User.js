const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = {
  User: mongoose.model("users", UserSchema),
};
