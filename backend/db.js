
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytm");


const UserSchema = mongoose.Schema({
    username:String,
  firstName: String,
  lastName: String,
    password: String,

});

const User = mongoose.model("User", UserSchema);

const accountSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  balance: {
    type: Number,
    required: true
  }
});

const Account = mongoose.model("Account", accountSchema);



module.exports = {
  User,
  Account,
};
    
    



