const express = require('express');
const router = express.Router();
const drinksCtrl = require('../../controllers/api/drinks')
const Drink = require('../../models/drink')

router.post('/', (req, res) => {
  Drink.create(req.body, function(err, newDrink){
    if (err) return res.status(500).send(err);
    return res.send(newDrink);
  });
});
// router.post('/', drinksCtrl.create)
router.delete('/:id', drinksCtrl.delete)
router.get('/:id', drinksCtrl.index) 
router.get('/', drinksCtrl.all) 


module.exports= router;