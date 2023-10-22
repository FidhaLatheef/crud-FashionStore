var express=require('express');
var router=express.Router();



router.get('/',(req,res)=>{
    const productsData = [
        {
            id: 1,
            image: '/images/banner 1.png',
            description: 'Product 1 description',
            price: '$10',
        },
        {
            id: 2,
            image: '/images/banner 2.png',
            description: 'Product 1 description',
            price: '$15',
        },
        {
            id: 3,
            image: '/images/banner 3.png',
            description: 'Product 1 description',
            price: '$10',
        },
        {
            id: 4,
            image: '/images/im1.png',
            description: 'Product 1 description',
            price: '$10',
        },
        {
            id: 5,
            image: '/images/im2.png',
            description: 'Product 1 description',
            price: '$10',
        },
        {
            id: 6,
            image: '/images/im3.png',
            description: 'Product 1 description',
            price: '$10',
        },
        {
            id: 7,
            image: '/images/im4.png',
            description: 'Product 1 description',
            price: '$10',
        },
        {
            id: 8,
            image: '/images/im5.png',
            description: 'Product 1 description',
            price: '$10',
        },
        {
            id: 9,
            image: '/images/im6.png',
            description: 'Product 1 description',
            price: '$10',
        }


    ];
    res.json(productsData);
  
})


module.exports=router;