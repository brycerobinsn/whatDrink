import * as drinksAPI from './drinks-api'

export async function addDrink(formData) {
    await drinksAPI.addDrink(formData)
    return console.log('Adding Drink')
}
export async function deleteDrink(drinkId) {
    await drinksAPI.deleteDrink(drinkId)
    return console.log('deleting drink')
}
export async function editDrink(drinkId) {
    await drinksAPI.editDrink(drinkId)
    return console.log(`Editing ${drinkId}`)
}