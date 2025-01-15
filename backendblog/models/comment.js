const { mongo, default: mongoose } = require("mongoose");


const commentSchema = mongoose.Schema({
    ids : mongoose.Schema.Types.ObjectId,
    ref : "posts"
},
{
    body:{type:String,required:true}
}
)

module.exports = mongoose.model("comment",commentSchema);