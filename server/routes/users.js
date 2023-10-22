var express = require('express');
var router = express.Router();

const userController = require('../Controllers/userController');

router.get('/', userController.getUser);
router.post('/', userController.postUser);

router.get('/getUserList', userController.getUserList);
router.get('/getUserById/:id', userController.getUserById);
router.put('/updateUserById/:id', userController.updateUserById);
router.delete('/deleteUserById/:id', userController.deleteUserById);



module.exports = router;
