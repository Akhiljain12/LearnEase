const mongoose = require("mongoose");

const AdmissionDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    fatherPhone: {
        type: String,
        required: true
    },
    collegeLocation: {
        type: String,
        required: true
    },
    preferredCollege: {
        type: String,
        required: true
    },
    "10thScore": {
        type: String,
        required: true
    },
    "12thScore": {
        type: String,
        required: true
    },
    yearOfPassing10th: {
        type: String,
        required: true
    },
    majorSubject: {
        type: String,
        required: true
    },
    courseLookingFor: {
        type: String,
        required: true
    }
});

const DataforAdmission = mongoose.model("Admission", AdmissionDataSchema);
module.exports = DataforAdmission;
