const Drink = require('../../models/drink')

async function create(req, res) {
    console.log('Create Drink Running',req.body)
    try{
        const drink = await Drink.create(req.body)
        res.json(drink)
    } catch(err){
        res.status(400).json(err)
    }
}
async function deleteDrink (req, res) {
    await Drink.findOneAndDelete({_id: req.params.id})
    res.redirect('/drinks')

}
async function index(req, res) {
    const drinkIdx = await Drink.findById(req.params.id)
    res.json(drinkIdx)
}
async function allDrinks(req, res) {
    const drinks = await Drink.find()
    res.json(drinks)
}

module.exports = {
    create,
    delete: deleteDrink,
    index,
    all: allDrinks
}