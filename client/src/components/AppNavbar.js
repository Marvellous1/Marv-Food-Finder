import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import search from '../elements/search.jpg';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container} from 'reactstrap';

class AppNavbar extends Component{
    state= {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    } 

    render() {
        return(
               <div>
                <Navbar color="dark" dark expand="sm" className ="AppNavbar" >
                    <Container>
                        <NavbarBrand href ="/" ><img className="Marvlogo" src={search} alt="Marv" height='30' width='30' /></NavbarBrand>
                        <NavbarBrand href ="/" >Marv Food Finder</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className ="ml-auto" navbar>
                                <NavItem>
                                    <Link to="/MyRecipes" className= "nav-link" >Recipe List</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/About" className= "nav-link" >About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/Contact" className= "nav-link" >Contact Us</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/Privacy" className= "nav-link" >Privacy Policy</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}



export default AppNavbar;