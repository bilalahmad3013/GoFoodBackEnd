const express = require('express');
const router = express.Router();

router.post('/foodData', (req,res)=>{
    try {
        res.send([global.foodItems,global.foodCat])
    } catch (error) {
        console.log(error);
        res.send("Server Error");
    }
})

module.exports=router;