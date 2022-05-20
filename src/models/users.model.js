const mongoose = require('mongoose')
const crypto = require('crypto')

const UserSchema = new mongoose.Schema(
   {
      id: {type: String},
      nome: {type: String, required: true},
      email: {type: String, required: true},
      hash: {type: String},
      salt: {type: String}
   });

UserSchema.methods.setPassword = function(password){
   this.salt = crypto.randomBytes(16).toString('hex');
   this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString('hex')
};

UserSchema.methods.validPassword = function(password) {
   var hash = crypto.pbkdf2Sync(password, this.salt, 1000,64, "sha512").toString("hex");
   return this.hash === hash;
}

const users = mongoose.model("User", UserSchema)
module.exports = users