import React, {useEffect, useState} from "react";
import All from './All';
const Drinks =() =>{

const [recipes, setRecipes] = useState([]);

useEffect( ()=> {
 getRecipes();
}, []);

const getRecipes = async ()=>{
    const response = await fetch( 'https://www.food2fork.com/api/search?key=f8ba2eba226939a3417d8f94f39c918e&q=drinks');
    const data =await response.json();
    setRecipes(data.recipes);
     console.log(data.recipes)
    };
 


 

return(
  
<div className='Root'>
  <div className='recipe' >	
    {recipes.map(recipe => (
      <All 
      key={recipe.recipe_id }
      title={recipe.title }
      image={recipe.image_url }
      source={recipe.source_url }
      fullimage={recipe.image_url }
      />
    ))};
  </div>
</div>
    );
  };
  
  export default Drinks;
