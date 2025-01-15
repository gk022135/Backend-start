const Like = require("../models/like");

const likeCtrl = async (req, res) => {
    try {
        const idsData = req.body;
        const likeDoc = new Like(idsData);

        const objsave = await likeDoc.save();

        const populatedLike = await Like.findById(objsave._id)
            .populate('ids_user')  // Populate the user reference (should match `ref` in schema)
            .populate('ids_post');  // Populate the post reference (should match `ref` in schema)

        console.log("Populated Like:", populatedLike);

        res.status(200).send({
            message: "User liked successfully",
            like: populatedLike
        });
    } catch (error) {
        res.status(500).send("Failure in like controller");
        console.error("Error occurred in likeCtrl:", error);
    }
};

module.exports = likeCtrl;
