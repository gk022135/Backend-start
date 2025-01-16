const PostModel = require('../models/postModel');
const Like = require('../models/like');

const disLike = async (req, res) => {
    try {
        const { ids_post, ids_user } = req.body;

        const removedLike = await Like.findOneAndDelete({ ids_post, ids_user });

        if (!removedLike) {
            return res.status(404).send({ message: "Like not found for the given post and user." });
        }

        // Update the Post model to remove the like reference
        const updatedPost = await PostModel.findByIdAndUpdate(
            ids_post,
            { $pull: { likes: { ids: removedLike._id } } },  // Remove the like ID from likes array
            { new: true }
        );

        res.status(200).send({
            message: "Like removed successfully",
            updatedPost
        });
    } catch (error) {
        res.status(500).send("Error in disLike controller");
        console.error("Error in disLike controller:", error);
    }
};

module.exports = disLike;
