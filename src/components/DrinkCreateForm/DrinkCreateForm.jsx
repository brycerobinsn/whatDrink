import { Component } from "react";
import drink from "../../../models/drink";


export default class CreateDrinkForm extends Component {
  state = {
    name: '',
    image: '',
    liquor:'',
    ingredients:[],
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
    } catch {
      // Invalid signup
      this.setState({
        error: 'Drink Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Image</label>
            <input type="file" name="image" value={this.state.image} onChange={this.handleChange} required />
            <label>Liquor</label>
            <select name='liquor' value={drink.liquor} onChange={this.handleChange} required>
                <option value='gin'>Gin</option>
                <option value='vodka'>Vodka</option>
                <option value='tequila'>Tequila</option>
                <option value='rum'>Rum</option>
                <option value='whiskey'>Whiskey</option>
            </select>
            <label>Ingredients</label>
            <input type="text" name="ingredients" value={this.state.ingredients} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}