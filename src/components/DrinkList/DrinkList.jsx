import { useState, useEffect } from "react"
import DrinkCard from "../DrinkCard/DrinkCard"
import { allDrinks } from "../../utilities/drinks-api"

export default function DrinkList(){
const [drinks, setDrinks] = useState([])
useEffect( () => {
    const getAllDrinks = async () => {
        const allDrink =  await allDrinks()
        console.log({allDrink})
        setDrinks(allDrink)
    }
    getAllDrinks()
},[])
console.log({drinks})
    return (
        <>
            <div>
                {drinks.map((drink) => (
                    <DrinkCard key={drink._id} drink={drink}/>
                ))}
            </div>
        </>
    )
}