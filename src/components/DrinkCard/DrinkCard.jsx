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
                    &nbsp; | &nbsp;
                    <div>{drink.liquor}</div>
                </div>
            </Link>
                 <br></br>
                <button onClick={() => deleteOne(drink._id)}>Delete</button>
            <Link to={`/drinks/${drink._id}/edit`}>
                <button>Edit</button>
            </Link>
        </div>
    )
}