const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.DB_Url;
console.log("hi it is here",URL);

const ConnectionDb = async(req,res) =>{
    try{
        await mongoose.connect(URL)
        .then(console.log("Database connected succefully bro"))
    }
    catch (e){
       console.log("error occured of type: ",e);
    }
}

const ModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});


const Model = mongoose.model('Hi', ModelSchema);
const doc = new Model({ name: 'gau',
    
 });

doc.save()
    .then(() => console.log('Document saved successfully'))
    .catch((err) => console.error('Error saving document:', err));

module.exports = ConnectionDb;

