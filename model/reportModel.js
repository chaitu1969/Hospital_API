const mongooose = require("mongoose");
const reportSchema = mongooose.Schema(
  {
    patient: {
      type: mongooose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    patientName:{
      type:String
    },
    doctor: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "Negative",
        "Travelled-Quarantine",
        "Symptoms-Quarantine",
        "Positive-Admit",
      ],
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  }
  // {
  //   timestamps: true,
  // }
);

const Report = mongooose.model("Report", reportSchema);

module.exports = Report;
