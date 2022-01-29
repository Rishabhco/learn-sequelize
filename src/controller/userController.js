const userModels=require('../models/userModels');

const home=(req,res)=>{
    try{

        console.log('Welcome to the home page');
        res.status(200).send('Welcome to the home page');
    }catch(error){
        console.log(error);
        res.status(400).send("error");
    }
}

module.exports={
    home
}