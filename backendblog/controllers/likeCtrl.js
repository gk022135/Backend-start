const Like = require("../models/like");
const postModel = require("../models/postModel");

const likeCtrl = async (req, res) => {
    try {
        const { ids_post, ids_user } = req.body; 
        const likeDoc = new Like({ ids_post, ids_user });

        const objsave = await likeDoc.save();

        // Updating the post with the new like reference
        const updatePost = await postModel.findByIdAndUpdate(
            ids_post,  // Find the post by its ID
            {
                $push: { likes: { ids: objsave._id } }  // Push the like ID into the likes array
            },
            { new: true, useFindAndModify: false }  // Return the updated post
        );

        const populatedLike = await Like.findById(objsave._id)
            .populate('ids_user')  // Populate the user reference
            .populate('ids_post');  // Populate the post reference

        console.log("Populated Like:", populatedLike);

        res.status(200).send({
            message: "User liked successfully",
            like: populatedLike,
            updatedPost: updatePost 
        });
    } catch (error) {
        res.status(500).send("Failure in like controller");
        console.error("Error occurred in likeCtrl:", error);
    }
};

module.exports = likeCtrl;
