const Comment = require("../models/comment");

// GET request to fetch all comments for a specific post
const AllCommentsToPost = async (req, res) => {
    try {
        const { postId } = req.params;
        

        // Fetch all comments for the given post ID
        const fetchComments = await Comment.find({ ids_post: postId })  // Use `find` for multiple documents
            .populate('ids_user') 
            .populate('ids_post');
            

        res.status(200).send({
            message: "Comments fetched successfully",
            comments: fetchComments
        });

        console.log("Total comments for post:", fetchComments.length);
    } catch (error) {
        res.status(500).send("Error fetching comments for the post");
        console.error("Error in fetching comments:", error);
    }
};

module.exports = AllCommentsToPost;
