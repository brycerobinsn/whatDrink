import { useState } from "react";
import * as drinkAPI from '../../utilities/drinks-api';


export default function AddDrink({newDrink}) {
  const [drink, setDrink] = useState ({
    name: '',
    image: '',
    liquor:'',
    details:'',
  });

  const handleSubmit =  async (evt) => {
    evt.preventDefault();
    console.log('Submitted')
    await drinkAPI.addDrink(drink)
    setDrink({
        name:'',
        image:'',
        liquor: '',
        details: ''
    })
  }

  const handleChange = (evt) => {
    setDrink ({ ...drink,
        [evt.target.name]: evt.target.value,
        [evt.target.image]: evt.target.value,
        [evt.target.liquor]: evt.target.value,
        [evt.target.details]: evt.target.value,
    })
  }

 
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={drink.name} onChange={handleChange} required />
            <label>Image</label>
            <input type="file" name="image" value={drink.image} onChange={handleChange}/>
            <label>Liquor</label>
            <select name='liquor' value={drink.liquor} onChange={handleChange} required>
                <option value='gin'>Gin</option>
                <option value='vodka'>Vodka</option>
                <option value='tequila'>Tequila</option>
                <option value='rum'>Rum</option>
                <option value='whiskey'>Whiskey</option>
            </select>
            <label>Details</label>
            <input type="text" name="details" value={drink.details} onChange={handleChange} required />
            <button type="submit" >Add Drink</button>
          </form>
        </div>
      </div>
    );
  }