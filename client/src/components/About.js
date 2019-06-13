import React, {Component} from 'react';
   
class About extends Component {
  render(){
    return(
      <div className= 'About' >
        <h1 Class="text-danger">Who we are</h1>   
        <h4>Marv Food Finder is a Recipe search website to get all your food recipes you need. We make use of Food to Fork api to render our services.   </h4>       
        <p>
        Marv Food finder is a cooking and recipe website that in collabortion with Allrecipes aided by foodtofork api covers every kind 
        of recipe imaginable. Learn how to make desserts, snacks for the kids, dinner
       recipes, lunch ideas, breakfast recipes, quick and easy meals, slow cooker recipes,
        holiday meal ideas and so much more. Plan your weeknight dinners and find yummy
         weekend brunch recipes with the help of Marv Food Finder. Anyone who loves to cook and find new recipe
            ideas would enjoy Marv Food Finder</p>
        <h1 Class="text-danger">Why we are here</h1>
        <h4>To Make life tasty</h4> 
        <p className= 'About'>© 2019 Marv Food Finder. </p>
        </div>       
    );
  }
}
export default About;
