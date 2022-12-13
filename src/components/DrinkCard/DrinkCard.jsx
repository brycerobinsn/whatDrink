import { Link } from "react-router-dom";
import { deleteDrink } from "../../utilities/drinks-api";
import './DrinkCard.css';

export default function DrinkCard ({drink}) {
    const drinkStyle = {
        backgroundSize:'cover'
    }
    function deleteOne(drinkId) {
        deleteDrink(drinkId)
    }

    return (
        <div className="drinkContainer">
            <Link to={`/drinks/${drink._id}`}>
                <div className="drink" style={drinkStyle}>
                    <div>{drink.name}</div>
                </div>
            </Link>
            <button onClick={() => deleteOne(drink._id)}>Delete</button>
        </div>
    )
}