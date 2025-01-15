const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,  // Removes extra spaces at the beginning and end
    },
    email: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("usermodels", userSchema);
