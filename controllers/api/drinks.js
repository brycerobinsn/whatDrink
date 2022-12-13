const Drink = require('../../models/drink')

module.exports = {
    create,
    delete: deleteDrink,
    index,
    all: allDrinks,
    edit: editDrink,
    update: updateDrink

}
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
    const drinkDelete = await Drink.findOneAndDelete({_id: req.params.id})
    res.json(drinkDelete)

}
async function index(req, res) {
    const drinkIdx = await Drink.findById(req.params.id)
    res.json(drinkIdx)
}
async function allDrinks(req, res) {
    const drinks = await Drink.find()
    res.json(drinks)
}
async function editDrink(req, res) {
    const drinkIdx = await Drink.findById(req.params.id)
    res.json(drinkIdx)
}
async function updateDrink(req, res) {

    const drinkUpdate = await Drink.findByIdAndUpdate({_id: req.params.id}, ...req.body)
    res.json(drinkUpdate)
}
