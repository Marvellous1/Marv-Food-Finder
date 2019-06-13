import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import wine from '../elements/wine.jpg'
import drinks from '../elements/drinks.jpg'
import snacks from '../elements/snacks.jpg'
import desserts from '../elements/desserts.jpg'
import food from '../elements/food.jpg'
import search from '../elements/search.jpg'

class Main extends Component {
  render(){
    return(
      <div className='Main'>
        <h1 className="Marv">
          <span>
            <img class="img-responsive Marvlogo" src={search} alt="" ></img>
          </span> 
          <span class="text-primary " >
             M
          </span>arvFoodFinder 
        </h1>

        <h5 className="galleryquotes"> Learn how to make desserts, snacks for the kids, dinner
        recipes, lunch ideas, Wines,  breakfast recipes, quick and easy meals, slow cooker recipes,
         holiday meal ideas and so much more.</h5>
  
            <div className="gallery">

              <Link to = '/drinks' className='gallery__item--1'>
                <figure className="gallery__item"> 
                  <img src={drinks} className="gallery__img" alt="drinks" />
                </figure>
              </Link>  

              <Link to = '/wine' className='gallery__item--2'>
                <figure className="gallery__item">  
                  <img src={wine} className="gallery__img" alt="wine" />
                </figure>
              </Link>

              <Link to = '/snacks' className='gallery__item--3'>
                <figure className="gallery__item">  
                  <img src={snacks} class="gallery__img" alt="snacks" />
                </figure>
              </Link>

              <Link to = '/desserts' className='gallery__item--4'>
                <figure className="gallery__item">  
                  <img src={desserts} className="gallery__img" alt="desserts" />
                </figure>
              </Link>

              <Link to = '/food' className='gallery__item--5'>
                <figure className="gallery__item">  
                  <img src={food} className="gallery__img" alt="food" />
                </figure>
              </Link>

              
            </div>
      </div>
     
    );
  }
}
export default Main;
