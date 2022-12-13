import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { indexDrink } from "../../utilities/drinks-api"
import { deleteDrink } from "../../utilities/drinks-api"

export default function DrinkDetails(){
const {id} = useParams()
const [drink, setDrink] = useState({})
useEffect( () => {
    const getDrinkByID = async () => {
        const idDrink =  await indexDrink(id)
        console.log({idDrink})
        setDrink(idDrink)
    }
    getDrinkByID()
},[])
function deleteOne(drinkId) {
    deleteDrink(drinkId)
}
console.log({drink})
    return (
        <>
            <div>
                <h3>{drink.name}</h3>
                <p>{drink.details}</p>
                <button onClick={() => deleteOne(drink._id)}>Delete</button>
            </div>
        </>
    )
}