const { default: mongoose } = require("mongoose");
// const {comment} = require('../Models/comment')

const postSchema = new mongoose.Schema({
    username : {type:String,required:true,maxLength:20},
    postDescription : {type:String,required:true, maxLength:200},
    likes : [{
        ids : 
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Like"
        } 
    }],
    Comments : [
      { 
        ids: {
            type : mongoose.Schema.Types.ObjectId,
            ref : "comment"
        }
    }
    ]
})

const postModel = new mongoose.model('posts',postSchema);

module.exports = postModel;