const Model = require('../Models/test');

const putData = async (req, res) => {
  try {
    const { id, name, age } = req.body;

    if (!id) {
      return res.status(400).send("Please provide an ID");
    }

    const updatedData = await Model.findOneAndUpdate(
      { _id: id }, // Query to find the document by ID
      { name, age }, // Update the fields
      { new: true } // This ensures the updated document is returned
    );

    if (!updatedData) {
      return res.status(404).send("No record found with the given ID");
    }

    res.status(200).json({ message: "Update successful", data: updatedData });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

module.exports = putData;
