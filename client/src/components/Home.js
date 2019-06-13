import React, {Component} from 'react';

import about from '../elements/about.jpg'
import discover from '../elements/discover.jpg'
import search2 from '../elements/search.jpg'
import list from '../elements/list.jpg'
import {Link} from 'react-router-dom';

import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends Component {
  render(){
    return(
      <div >

        <div className='images' >
          <h3 className='header1' >Find all you favourite Recipe</h3>
          <h1 className= 'header2'><b>Grant Your Tummy it's wish</b></h1>
          <Link to = "/search" >   
            <Button
              className= 'homebutton'
              >Search Now      
            </Button>
          </Link>
        </div>

  

        <div className= 'MaintwoMain'>

          <div class="row">

            <div class="col-md-3">
                <div className= 'Maintwo' >
                  <h1 className= 'Maintwoheader'>Discover</h1>
                  <Link to ='/discover'>
                    <img class="img-responsive " className='Allimages' src={discover} alt= ""/>
                    </Link>
                    <h5 className= 'Maintwoheade'>Discover Recipes from around the world for all your drinks, wine, food , snacks, desserts and many more</h5>
                </div>
            </div>
          
            <div class="col-md-3">
              <div className= 'Maintwo'>
                <h1 className= 'Maintwoheader'>Search</h1>
                <Link to ='/search'>
                  <img class="img-responsive" className='Allimages' src={search2} alt= ""/>
                </Link>
                <h5 className= 'Maintwoheade'>Find For Your desired Meal Home and abroad</h5>
                </div>
            </div>
          

          <div class="col-md-3">
          <div className='Maintwo3'>
          <div className='Maintwo'>
            <h1 className= 'Maintwoheader'>About</h1>
              <Link to ='/about' >
                <img class="img-responsive" className='Allimages' src={about} alt= ""/>
              </Link>
              <h5 className= 'Maintwoheade'>Learn More About Marv Foodies and Recipesand enjoy it at its peak</h5>
              </div>
        </div>
          </div>
      
          <div class="col-md-3">
          <div className='Maintwo4'>
          <div className='Maintwo'>
            <h1 className= 'Maintwoheader'>Recipe List</h1>
              <Link to ='/MyRecipes' >
                <img class="img-responsive" className='Allimages' src={list} alt= ""/>
              </Link>
              <h5 className= 'Maintwoheade'>Create a list of all your desired recipe and find them all in a place </h5>
              </div>
        </div>
    
          </div>

        </div>


        </div>




        
        <div className="Mainlast">
          <p>© 2019 Marv Food Finder. </p>
          <p>All Rights Reserved.</p>
          <p><b>Powered by</b> FoodtoFork.</p>
          <div class="text-center ">
            <span >
              <Link to = '/Contact'>Contact Us </Link>
            </span>
              <Link to = '/Privacy'> Privacy Policy</Link>    
          </div>
        </div>
      </div>
        
        
    ); 
  }
}
export default Home;


