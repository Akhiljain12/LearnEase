const express = require('express');
const mongoose = require('mongoose');
// dataforaddmision matlab collection schema
const DataforAdmission = require('./Models/AdmissionData');
const contact = require('./Models/Contactus');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// addmisionData database name okk
mongoose.connect("mongodb://127.0.0.1:27017/addmisionData", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

// Endpoint to handle POST requests for admission data
// ye post api 
app.post("/postadmission", async (req, res) => {
    try {
        const admissionData = await DataforAdmission.create(req.body);
        let res1=res.json(admissionData);
        console.log(JSON.parse(res1));
    } catch (error) {
        console.error("Error creating admission data:", error);
        res.status(500).json({ error: "An error occurred while creating admission data" });
    }
});
app.post("/postcontact", async (req, res) => {
    try {
        const ContactusData = await contact.create(req.body);
        let res1=res.json(ContactusData);
        console.log(JSON.parse(res1));
    } catch (error) {
        console.error("Error creating admission data:", error);
        res.status(500).json({ error: "An error occurred while creating admission data" });
    }
});

// Start the server
// server hai create karna padega 
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
