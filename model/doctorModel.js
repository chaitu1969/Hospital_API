const mongooose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const doctorSchema = mongooose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

doctorSchema.pre('save',async function() {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password,salt);
});

doctorSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({id:this._id},'secret',{expiresIn: '120m'});
};

doctorSchema.methods.matchPassword = async function(enteredpassword) {
  return await bcrypt.compare(enteredpassword,this.password);
}


const Doctor = mongooose.model("Doctor", doctorSchema);
module.exports = Doctor;
