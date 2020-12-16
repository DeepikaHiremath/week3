import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import { Navbar, NavbarBrand } from 'reactstrap';
//import Menu from './Components/MenuComponent_old';
import Menu from './components/MenuComponent_RouteParam';
//import Main from './components/MainComponent_RouteParam';
import Main from './components/MainReduxComponent';
import {DISHES } from './shared/dishes';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configuration'
const store = ConfigureStore();

class App extends Component {


  render ()
  {
    return(
      <div className="App">
        <Provider store={store}>
      <BrowserRouter>
       <div>
          <Main/>
        </div>
        </BrowserRouter>
      </Provider>
        </div>
    );
   // constructor (props){
  //   super(props);
  //   this.state={dishes:DISHES}
  // }
  // render() {
  //   return (
  //     <div className="App">
  //       <Navbar dark color="primary">
  //         <div className="container">
  //           <NavbarBrand href="/">ReactJs Logo</NavbarBrand>
  //         </div>
  //       </Navbar>
  //       <Menu dishes={this.state.dishes}></Menu>
         
  //     </div>
  //   );
   }
}

export default App;