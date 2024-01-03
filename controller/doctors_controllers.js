const Doctor = require('../model/doctorModel');
const jwt = require('jsonwebtoken');

//Doctor Registration
module.exports.register = async (req,res) => {
    try {
        const doctor = await Doctor.create(req.body);

        return res.status(200).json({
            message: doctor
    });
    } catch(err) {
        return res.status(500).json({
            message: err.message
        });
    }
}


// Doctor Login
module.exports.login = async (req,res) => {

    try {

        const doctor = await Doctor.findOne({email: req.body.email});

        const isMatch = await doctor.matchPassword(req.body.password);

        if(!doctor || !isMatch){
            return res.status(401).json({
                message: "Invalid Username or Password"
            })
        }else{
            const token = doctor.getSignedJwtToken();

            return res.status(200).json({
                message: 'Sign in successfull, here is token',
                data : {
                    token : token,
                }
            });
        }
    } catch(err) {
        return res.status(500).json({
            message: "Internal serve error",
            error: err.message
        })
    }

}