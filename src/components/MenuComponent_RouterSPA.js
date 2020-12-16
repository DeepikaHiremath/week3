
import React  from "react";
import { Card, CardImg, CardImgOverlay, CardTitle,CardBody,CardText } from "reactstrap";


//   constructor(props){
//       super(props);

//       this.state = {
//           selectedDish : null
          
//       }
//       console.log("menu component constructor is invoked");
//   }
//   componentDidMount(){
//       console.log("menu component componentDidMount is invoked");
//   }

  // onDishSelect(dish) {
  //     this.setState({selectedDish : dish});
  // }

//   renderDish(dish){
//       if (dish != null){
//           return(
//             // <div key = {dish.id} className="col-12 col-md-5 m-1">
//               <Card>
//                    <CardImg width ="100%" object src ={dish.image} alt={dish.name} />
//                    <CardBody>
//                    <CardTitle heading>{dish.name}</CardTitle>
//                    <CardText>{dish.description}</CardText>
//                    </CardBody>
//               </Card>
//               // </div>
//           );

//       }
//       else{
//           return(
//               <div></div>
//           );
//       }
//   }
 function RenderMenuItem({dish, onClick}){
     return(
        <Card  onClick={() => onClick(dish.id)}> 
                         
            <CardImg width ="100%" object src ={dish.image} alt={dish.name} />
   
            <CardImgOverlay body className="ml-5">
            <CardTitle heading>{dish.name}</CardTitle>
      
             </CardImgOverlay>
        </Card>
     );
 }
    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return(
                    <div key = {dish.id} className="col-12 col-md-5 m-1">
                       <RenderMenuItem dish={dish} onClick={props.onClick}/>
                    </div>
            );
        });
  
        
  
        return(
            <div className = "container">
                <div className = "row">
                    
                        {menu}
  
                </div>
                <div className = "row">
                    {/* {this.renderDish(this.state.selectedDish)} */}
                </div>
            </div>
        );

    }
      
  



export default Menu;

