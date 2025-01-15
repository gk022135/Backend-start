const Model = require('../Models/test');

const deleteData = async (req, res) => {
  try {
    const getId = req.params.id;
    
    if (!getId) {
      return res.status(400).send("Please provide an ID");
    }

    const deletionResult = await Model.deleteOne({ _id: getId });

    if (deletionResult.deletedCount === 0) {
      return res.status(404).send(`No record found with ID ${getId}`);
    }
    res.status(200).send(`Deletion of ID ${getId} is done successfully`);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while deleting the data");
  }
};

module.exports = deleteData;
