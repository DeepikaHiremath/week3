import React, { Component } from 'react';
import Home from './HomeComponentSPA';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent_RouterSPA';
import DishDetail from './DishDetailComponent';

import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotion';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import AboutUs from './AboutusComponent';
import Contact from './ContactComponent';
 
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments:COMMENTS,
        promotions:PROMOTIONS,
        leaders:LEADERS
       // selectedDish: null
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId});
  // }

  render() {
    const HomePage =() => {
      return (
        <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]} 
         promotion={this.state.promotions.filter((promo)=> promo.featured)[0]} 
         leader={this.state.leaders.filter((leader)=> leader.featured)[0]} 
         />
      );
    }
  
  // render() {​​​​​​​
  //   const HomePage = () =>{​​​​​​​
  //       return(
  //           <Home dish={​​​​​​​this.state.dishes.filter((dish)=>dish.featured)[0]}​​​​​​​
  //                 promotion ={​​​​​​​this.state.promotions.filter((promo)=>promo.featured)[0]}​​​​​​​
  //                 leader={​​​​​​​this.state.leaders.filter((leader)=>leader.featured)[0]}​​​​​​​
                  
  //           />
  //       );
  //   }​​​​​​​
    return (
      <div>
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Hastings Insurance</NavbarBrand>
          </div>
        </Navbar> */}
        <Header/>
        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/aboutus" component={AboutUs} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
            <Route path="/contact" component={Contact}/>
            <Redirect to="/home" />
        </Switch>
        <Footer/> 
         </div>
    );
  }
}

export default Main;
