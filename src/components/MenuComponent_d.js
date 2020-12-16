import React, {Component} from 'react';
import { Col, Media } from 'reactstrap';
import { Card , CardImg, CardBody,CardImgOverlay, CardText, CardTitle } from 'reactstrap';

class Menu extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectedDish : null
            
        }
        console.log("menu component constructor is invoked");
    }
    componentDidMount(){
        console.log("menu component componentDidMount is invoked");
    }

    
    renderDish(dish){
        if (dish != null){
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                      <Card key={dish.id}
                        onClick={() => this.props.onClick(dish.id)}>
                     <CardImg width ="100%" object src ={dish.image} alt={dish.name} />
                     <CardBody>
                     <CardTitle heading>{dish.name}</CardTitle>
                     <CardText>{dish.description}</CardText>
                     </CardBody>
                     </Card>
               </div>
               
            );

        }
        else{
            return(
                <div></div>
            );
        }
    }
    render(){
        const menu = this.props.dishes.map((dish) => {
            return(
                    <div key = {dish.id} className="col-12 col-md-5 m-1">
                        <Card onClick = {() => this.props.onClick(dish.id)}>
                           
                                <CardImg width ="100%" object src ={dish.image} alt={dish.name} />
                           
                            <CardImgOverlay body className="ml-5">
                                <CardTitle heading>{dish.name}</CardTitle>
                              
                            </CardImgOverlay>
                        </Card>
                    </div>
            );
        });

        console.log("menu component render is invoked");

        return(
            <div className = "container">
                <div className = "row">
                    
                        {menu}

                </div>
                <div className = "row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }

}

export default Menu;