var express = require('express');
var router = express.Router();
var multer = require('multer');

const productController = require('../Controllers/productController');

// Multer configuration
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

var upload = multer({ storage: storage });


router.post('/addProduct', upload.array('images'), productController.addProduct);
router.get('/getProductList', productController.getProductList);
router.get('/getProductById/:id',productController.getProductById);
router.put('/updateProductById/:id',upload.array('images'),productController.updateProductById)
router.delete('/deleteProductById/:id',productController.deleteProductById)

module.exports = router;