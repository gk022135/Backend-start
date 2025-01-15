const mongoose = require('mongoose');

const likeSchema = mongoose.Schema({
    ids_post: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "posts"  // Correctly reference the Post model
    },
    ids_user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "usermodels"  // Correctly reference the User model
    }
});

module.exports = mongoose.model("Like", likeSchema);
