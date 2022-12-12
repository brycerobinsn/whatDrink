const Drink = require('../../models/drink')


module.exports = {
    create,
    delete: deleteDrink,
    index
}

async function create(req, res) {
    try{
        const drink = await Drink.create(req.body)
        res.json(drink)
    } catch(err){
        res.status(400).json(err)
    }
}
async function deleteDrink (req, res) {
    const drink = await Drink.findOneAndDelete({_id: req.params.id})
    res.json(drink)
}
async function index(req, res) {
    const drinkIdx = await Drink.find(req.params.id)
    res.json(drinkIdx)
}
