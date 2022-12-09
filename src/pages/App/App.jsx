import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import DrinkListPage from '../DrinkListPage/DrinkListPage';
import FavoritePage from '../FavoritePage/FavoritePage';
import NavBar from '../../components/NavBar/NavBar';
import IngListPage from '../IngListPage/IngListPage';

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main>
      {user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path='/drinks' element={<DrinkListPage/>}/>
            <Route path='/drinks/favorite' element={<FavoritePage/>}/>
            <Route path='/ingredients' element={<IngListPage/>}/>
          </Routes>
        </>
          :
          <AuthPage/>
      }
    </main>
  );
}

export default App;
