const Doctor = require('../model/doctorModel');
const Patient = require('../model/patientModel');
const Report = require('../model/reportModel');


module.exports.create_report = async function(req,res) {
    console.log('Inside report controller');

    const doctor = await Doctor.findById({_id : req.doctor._id});
    const patient = await Patient.findById({_id:req.params.id})
    const date = new Date();
    console.log('Dr:',doctor);

    try {
        const report = await Report.create({
            doctor:doctor.name,
            patientName:patient.name,
            patient:req.params.id,
            status: req.body.status,
            date: date,
        });

        return res.status(200).json({
            report: report,
            message: 'Report Created'
        });
    } catch(err) {
        return res.status(401).json({
            message: err.message
        });
    }
}

module.exports.all_reports = async function(req,res) {
    try {
        const reports = await Report.find({'patient':req.params.id}).sort({date:1});
        return res.status(200).json({
            reports
        })
    } catch(err) {
        console.log(err)
        return res.status(500).json({
            message: err.message
        });
    }
} 

module.exports.status = async (req,res) => {
    try {
        const reports = await Report.find({'status': req.params.status});
        return res.status(200).json({
            reports
        })
    } catch(err){
        return res.status(500).json({
            message: err.message
        });
    }
}