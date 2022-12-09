import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}){
    function handleLogOut(){
        //remove token
        userService.logOut()
        // update user state
        setUser(null)
    }

    return(
        <nav>
            <Link to='/drinks/favorite'>Favorites</Link>
            &nbsp; | &nbsp;
            <Link to='/drinks'>All Drinks</Link>
            &nbsp; | &nbsp;
            <Link to='/ingredients'>All Ingredients</Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name} </span>
            &nbsp; | &nbsp;
            <Link to='' onClick={handleLogOut}>Log Out</Link> 
        </nav>
    )
}