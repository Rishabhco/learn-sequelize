const express=require('express');
const  userController =require('../controller/userController');
const router=new express.Router();

router.get('/',userController.home);
router.post('/createUser',userController.createUser);
router.get('/findAllUser',userController.findAllUser);
router.patch('/updateUser/:id',userController.updateUser);
router.delete('/deleteUser/:id',userController.deleteUser);

module.exports=router;