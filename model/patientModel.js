const mongooose = require("mongoose");

const patientSchema = mongooose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Patient = mongooose.model("Patient", patientSchema);

module.exports = Patient;
