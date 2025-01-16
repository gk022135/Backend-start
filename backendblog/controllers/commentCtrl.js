const Comment = require("../models/comment");
const postModel = require("../models/postModel");

const commentCtrl = async (req, res) => {
    try {
        const commentData = req.body;
        const { ids_post, ids_user, body } = commentData;

        const doc = new Comment({ ids_post, ids_user, body });
        const objsave = await doc.save();
        

        // Update the post with the new comment
        const updatePost = await postModel.findByIdAndUpdate(
            ids_post,  // Find the post by its ID
            {
                $push: { Comments: { ids: objsave._id } }  // Push the comment ID into the Comments array
            },
            { new: true, useFindAndModify: false }  // Return the updated document
        );

        // Populate the saved comment
        const populatedComment = await Comment.findById(objsave._id)
            .populate('ids_user')  // Populate the user reference
            .populate('ids_post');  // Populate the post reference

        // Count total comments for the particular post
        const totalComments = await Comment.countDocuments({ ids_post: ids_post });

        res.status(200).send({
            message: "Comment saved successfully",
            comment: populatedComment,
            totalComments: totalComments  // Add total comments in response
        });

        console.log("Total comments on this post:", totalComments);
    } catch (error) {
        res.status(500).send("Error in comment controller");
        console.error("Error in comment controller", error);
    }
};

module.exports = commentCtrl;
