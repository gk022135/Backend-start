const postModel = require("../models/postModel");

const AllPosts = async (req, res) => {
    try {
        const { postId } = req.params; 

        const postDatas = await postModel.findById(postId)
            .populate('likes.ids')   // Populate likes
            .populate('Comments.ids');  // Populate comments

        if (!postDatas) {
            return res.status(404).send("Post not found");
        }

        res.status(200).send({
            message: "Post fetched successfully",
            post: postDatas
        });
    } catch (error) {
        res.status(500).send("Error while fetching all posts");
        console.error("Error in fetching posts:", error);
    }
};

module.exports = AllPosts;
