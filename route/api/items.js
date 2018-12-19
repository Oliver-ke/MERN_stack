const express = require('express');
const router = express.Router();

//item model
const Item = require('../../models/Item')

//routers//

//@route Get api/item
//@desc Get ALL Items
//@access Public
router.get('/', (req,res) =>{
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
})

//@route POST api/item
//@desc Create a Item
//@access Public
router.post('/', (req,res) =>{
   const newItem = new Item({
       name: req.body.name
   })
   newItem.save().then(item => res.json(item));
});

//@route Delete api/item/:id
//@desc Delete an Item
//@access Public
router.delete('/:id', (req,res) =>{
    Item.findById(req.params.id).then((item) =>{
        item.remove().then(() =>{
            res.json({success: true})
        })
    }).catch(err => res.status(404).json({success: false}));
 });

//@route Update api/item/:id
//@desc Update an Item
//@access Public
router.patch('/:id', (req,res) =>{
   Item.findByIdAndUpdate(req.params.id,{$set:{name:req.body.name}}).then(item =>{
       res.json(item)
   }).catch(err => res.status(404).json({error: 'item not found'}))
 })

module.exports = router;