const mongoose = require("mongoose");


const AdmissionDataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true }, 
    email: { type: String, required: true }, 
    course: { type: [String], required: true },
    message: { type: String, required: false } 
});

const contact = mongoose.model("contactus", AdmissionDataSchema);
module.exports = contact;