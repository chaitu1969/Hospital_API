const Patient = require('../model/patientModel');

// Patient Registration

module.exports.register = async (req,res) => {

    try {

        const {phone,name} = req.body;

        if(!phone || !name) {

            return res.status(400).json({
                message: 'Invalid patient data',
                error: 'Phone and name fields are required',
            });
        }

        const patient = Patient.findOne({phone});

        if(!patient) {
            return res.status(409).json({
                patient,
                message: 'Patient already registered',
            });
        } else {
            const newPatient = await Patient.create({
                phone,
                name,
            });

            return res.status(201).json({
                patient: newPatient,
                message: "Patient Registered Successfully"
            });
        }
    } catch(err) {
        return res.status(500).json({
            message: "Error in registering patient",
            error: err.message
        });
    }
}