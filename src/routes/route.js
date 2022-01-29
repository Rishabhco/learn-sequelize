const express=require('express');
const  userController =require('../controller/userController');
const router=new express.Router();

router.get('/',userController.home);

module.exports=router;