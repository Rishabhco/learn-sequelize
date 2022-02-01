const express=require('express');
const  userController =require('../controller/userController');
const router=new express.Router();

router.get('/',userController.home);
router.post('/createUser',userController.createUser);
router.get('/findAllUser',userController.findAllUser);
router.patch('/updateUser/:id',userController.updateUser);
router.delete('/deleteUser/:id',userController.deleteUser);
router.post('/findData',userController.findData);
router.post('/setterGetter',userController.setterGetter);
router.get('/rawQuery',userController.rawQuery);

module.exports=router;