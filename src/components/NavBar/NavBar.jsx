import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}){

    function handleLogOut(){
        // remove token
        userService.logOut()
        //set user state
        setUser(null)
    }
    return(
        <nav>
            <span>welcome, {user.name}</span>
            &nbsp; | &nbsp;
            <Link to='/drinks/favorite'>Favorites</Link>
            &nbsp; | &nbsp;
            <Link to='/drinks'>All Drinks</Link>
            &nbsp; | &nbsp;
            <Link to='/drinks/create'>Create Drink</Link>
            &nbsp; | &nbsp;
            <Link to='/ingredients'>All Ingredients</Link>
            &nbsp; | &nbsp;
            <Link to=""onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}