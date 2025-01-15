// import express from 'express';
const Model = require("../Models/test")

const getData = async (req, res) => {
  try {
    const getId = req.params.id;
    if (!getId) {
      return res.status(400).send('ID is required bro ');
    }

    const data = await Model.findOne({ _id: getId });

    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).send('No record found');
    }
  } catch (error) {
    res.status(500).send('Internal server error');
  }
};

module.exports = getData;
