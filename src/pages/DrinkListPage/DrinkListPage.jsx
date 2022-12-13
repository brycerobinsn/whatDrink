import DrinkListForm from "../../components/DrinkListForm/DrinkListForm"
import DrinkList from "../../components/DrinkList/DrinkList"
import { useState } from 'react'

export default function DrinkListPage() {
    const [drink, selectedDrink] = useState()
    const rootURL = `www.thecocktaildb.com/api/json/v1/1/`
    const liquorURL = `www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`

    
    return (
        <>
        <h1>DrinkListPage</h1>
        <DrinkList/>
        </>
    )
}