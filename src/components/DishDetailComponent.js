import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb,BreadcrumbItem } from "reactstrap";
import {Link} from 'react-router-dom';
// var moment = require("moment");

 
  function renderComments(comments) {
    if (comments != null)
      return (
        <div>
          <h5>Comments</h5>
          <ul>
            {comments.map(comment => {
              return (
              //   <li>
              //     {/* {comment.comment} <br /> -- {comment.author}, {moment(comment.date).format("MMMM Do YYYY")} */}
              //     <p>{comment.comment} <br /> // {comment.author} ,{new Intl.DateTimeFormat('en-US', {year:'numeric',month:'short',day:'2-digit'}.format(new Date(Date.parse({comment.date})))}</p>
               
              //  </li>
               <p>{comment.comment} <br /> // {comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
              );
            })}
          </ul>
        
        </div>
      );
    else return <div>
      <h3>nothing to display , it is else part </h3>
    </div>;
  }

 
const Dishdetail = ({ dish }) => {
  if (!dish) {
    return null;
  }
  const { name, image, description, comments } = dish;
  return (
    <div className="row">
      
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{name}</BreadcrumbItem>
                    </Breadcrumb>
                
                </div>
        </div>         
          
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={image} alt={name} />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="col-12 col-md-5 m-1">{renderComments(comments)}</div>
     
    </div>
  );
};

export default Dishdetail;
