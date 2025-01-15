const Model = require('../Models/test');

const postTest = async (req, res) => {
  try {
    const data = req.body;
    const newData = new Model(data); 
    const savedData = await newData.save();
    res.status(201).json({ message: 'Data saved successfully', data: savedData });
  } catch (error) {
    res.status(500).json({ message: 'Error saving data bsdk', error: error.message });
  }
};

module.exports = postTest;