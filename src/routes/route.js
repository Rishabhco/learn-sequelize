const express=require('express');
const  userController =require('../controller/userController');
const router=new express.Router();

router.get('/',userController.home);
router.post('/createUser',userController.createUser);

module.exports=router;