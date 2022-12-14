import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { indexDrink } from "../../utilities/drinks-api"
import { deleteDrink } from "../../utilities/drinks-api"
import './DrinkDetails.css'

export default function DrinkDetails(){
const {id} = useParams()
const navigate = useNavigate()
const [drink, setDrink] = useState({})
useEffect( () => {
    const getDrinkByID = async () => {
        const idDrink =  await indexDrink(id)
        console.log({idDrink})
        setDrink(idDrink)
    }
    getDrinkByID()
},[])
async function handleDelete(drinkId) {
    await deleteDrink(drinkId)
    navigate('/')
    
}
console.log({drink})
    return (
        <>
            <div>
                <h1>{drink.name}</h1>
                <p>Drink Details: {drink.details}</p>
                <button onClick={() => handleDelete(drink._id)}>Delete</button>
            </div>
        </>
    )
}