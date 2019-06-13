import React, {useEffect, useState} from 'react';
import All from './Root/All';


const Search = () =>{

const[recipes, setRecipes ] = useState([]);
const[search, setSearch ] = useState("");
const[query, setQuery ] = useState("");
 
useEffect(()=> 
// eslint-disable-next-line
 setQuery(getRecipes), [query]);

const getRecipes = async ()=>{
  const response = await fetch( `https://www.food2fork.com/api/search?key=f8ba2eba226939a3417d8f94f39c918e&q=${query}`);
  const data =await response.json();
  setRecipes(data.recipes);
   console.log(data.recipes)
  };
 
 const updateSearch = e => {
   setSearch(e.target.value);
 };
 
//  const setQuery = e => {
//    setSearch(e.target.value);
//  };

 const getSearch = e => {
   e.preventDefault();
   setQuery(search);
   setSearch('');
   setQuery('');
 };

 

return(


  <div className= "Main" >	
    <form onSubmit = {getSearch} className= "search-form" >	
        <input 
          className= "search-bar" 
          type="text" 
          value = {search}
          placeholder =  "Enter Search Item"  
          onChange ={updateSearch}
          style={{marginTop:'2rem'}}
        />  

        <button  className= "search-button" type="submit" style={{marginTop:'2rem'}}>
          Search 
        </button>
    </form>

      <div className='recipe' >	
        {recipes.map(recipe => (
          <All 
            key={recipe.recipe_id }
            title={recipe.title }
            image={recipe.image_url }
            source={recipe.source_url }
           fullimage={recipe.image_url }
          />
        ))}
      </div>
      
    </div>
    );
  };
  
  export default Search;