import React, {Component} from 'react';
import Recipelist from './Recipelist';
import ItemModal from './itemModal';
import {Container} from 'reactstrap';

export default class MyRecipes extends Component {
render(){
    return(
        <div class='myrecipepage' >
            <Container>
              <ItemModal/>
              <Recipelist/>
            </Container>
        </div>
    )

}
}