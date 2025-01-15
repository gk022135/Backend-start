
const check = (req,res) =>{
    try{
        res.send("hi bro routes works fine")
    }
    catch
    {
        console.log("error")
    }
}
module.exports = check;