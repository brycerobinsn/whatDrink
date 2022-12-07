import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
        <nav>
            <Link to='/drinks/favorite'>Favorites</Link>
            &nbsp; | &nbsp;
            <Link to='/drinks'>All Drinks</Link>
            &nbsp; | &nbsp;
            <Link to='/ingredients'>All Ingredients</Link>
        </nav>
    )
}