const usermodels = require("../models/UserModel");

const userCtrl = async (req, res) => {
    try {
        const userData = req.body;
        console.log("hi sdlk  ",userData); //it gives undefined
        const doc = new usermodels(userData);
        await doc.save();
        res.status(200).send("User saved successfully.");
    } catch (error) {
        res.status(500).send("Failure in user controller.");
        console.error("Error occurred in userCtrl:", error);
    }
};

module.exports = userCtrl;
