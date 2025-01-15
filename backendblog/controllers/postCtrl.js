const PostModel = require('../models/postModel')

const postCtrl = async(req,res) =>{
      try{
          const datas = req.body; //object hai so no need for ();
          const doc = new PostModel(datas);
          await doc.save();
          res.status(200).send("ok u made a post");
      }
      catch(error){
          res.status(500).send("post ctrl failiure");
          console.log("post ctrl failiure",error);
      }
}
module.exports = postCtrl;