const Drink = require('../../models/drink')


module.exports = {
    create,
    delete: deleteDrink
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
}
