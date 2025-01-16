const { mongo, default: mongoose } = require("mongoose");


const commentSchema = mongoose.Schema(
    {
        ids_post: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "posts"  // Correctly reference the Post model
        },
        ids_user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "usermodels"  // Correctly reference the User model
        },
        body : {type:String}
    }
)

module.exports = mongoose.model("comment",commentSchema);