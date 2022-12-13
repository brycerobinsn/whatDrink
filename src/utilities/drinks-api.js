
const BASE_URL = 'http://localhost:3001/api/drinks'

export async function addDrink(formData) {

    await fetch(BASE_URL, 
      { 
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'

},
        body: JSON.stringify(formData)
      })
      .then(res => {
        console.log(res)
        return res;
      });
  }
  
export async function deleteDrink(drinkId) {
    return await fetch(`${BASE_URL}/${drinkId}`, 
        { 
          method: 'DELETE',
          mode: 'cors',
          headers: {
              'Access-Control-Allow-Origin' : '*'
  },
        })
        .then(res => {
          console.log(res)
          return res.json();
        }).then(data => {
            return data;
        });
}

export async function indexDrink(drinkId) {
    return await fetch(`${BASE_URL}/${drinkId}`, 
        { 
          method: 'GET',
          mode: 'cors',
          headers: {
              'Access-Control-Allow-Origin' : '*'
  },
        })
        .then(res => {
          console.log(res)
          return res.json();
        }).then(data => {
            return data;
        });
}

export async function allDrinks(){
    return await fetch(BASE_URL, 
        { 
          method: 'GET',
          mode: 'cors',
          headers: {
              'Accept': 'application/json',
              'Access-Control-Allow-Origin' : '*'
  },
        })
        .then(res => {
          console.log(res)
          return res.json();
        }).then(data => {
            return data;
        });
}