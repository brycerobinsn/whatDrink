const express = require('express');
const router = express.Router();
const drinksCtrl = require('../../controllers/api/drinks')


router.post('/', drinksCtrl.create)
router.delete('/:id', drinksCtrl.delete)
router.get('/:id', drinksCtrl.index)


module.exports= router;