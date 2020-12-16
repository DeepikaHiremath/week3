import React, { Component } from 'react';
import Home from './HomeComponentSPA';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent_RouterSPA';
import Menu_param from './MenuComponent_RouteParam';
import DishDetail1 from './DishDetailAssgn3';
import DishDetail from './Dish';
// import { DISHES } from '../shared/dishes';
// import {COMMENTS} from '../shared/comments';
// import {LEADERS} from '../shared/leaders';
// import {PROMOTIONS} from '../shared/promotion';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch,Route,Redirect, withRouter} from 'react-router-dom';
import AboutUs from './AboutusComponent';
import Contact from './ContactComponent_ReduxForm';
import About from './AboutusComponent';

import {connect } from 'react-redux';

const mapStateToProps =state => {
  return {
    dishes: state.dishes,
    comments :state.comments,
    promotions :state.promotions,
    leaders :state.leaders

  }
}
 
class Main extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //     dishes: DISHES,
    //     comments:COMMENTS,
    //     promotions:PROMOTIONS,
    //     leaders:LEADERS
    //    // selectedDish: null
    // };
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId});
  // }

  render() {
    const HomePage =() => {
      return (
        <Home dish={this.props.dishes.filter((dish)=> dish.featured)[0]} 
         promotion={this.props.promotions.filter((promo)=> promo.featured)[0]} 
         leader={this.props.leaders.filter((leader)=> leader.featured)[0]} 
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
  //   }​​​
  const DishWithId =({match}) => {
return(
 
  <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
  comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
);
  };
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
            {/* <Route path="/aboutUs" component={About} /> */}
            <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
            <Route exact path="/menu" component={() => <Menu_param dishes={this.props.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId}></Route>
            <Route exact path="/contact" component={Contact}/>
            <Redirect to="/home" />
        </Switch>
        <Footer/> 
         </div>
    );
  }
}

export default withRouter(connect (mapStateToProps)(Main));
