import { useState, useEffect } from "react"



export default function DrinkListForm (){


    return(
        <div className="form-container">
            <form>
                <label>Alcohol</label>
                <select name='liquor'>
                    <option value='gin'>Gin</option>
                    <option value='vodka'>Vodka</option>
                    <option value='tequila'>Tequila</option>
                    <option value='whiskey'>Whiskey</option>
                    <option value='rum'>Rum</option>
                </select>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}