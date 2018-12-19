const express = require('express');
const router = express.Router();

//item model
const User = require('../../models/User');

//routers//

//@route post api/user
//@desc sign up a user
//@acces puplic
router.post('/signup', (req,res,next) =>{
    const user = new User( {
        email: req.body.email,
        password: req.body.password
    })
    user.save().then(user =>{
        res.status(200).json({message: "success"})
        .catch(err => res.status(401).json({message: error}));
    });
    
})


module.exports = router;