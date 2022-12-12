import { Link } from "react-router-dom";
import './DrinkCard.css';

export default function DrinkCard ({drink}) {
    const drinkStyle = {
        backgroundSize:'cover'
    }

    return (
        <div className="drinkContainer">
            <Link to={`/drinks/${drink.name}`}>
                <div className="drink" style={drinkStyle}>
                    <div>{drink.name}</div>
                </div>
            </Link>
        </div>
    )
}