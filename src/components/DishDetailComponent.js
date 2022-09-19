import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  //   rendercomments() {
  //     const comment = this.props.dishes.comments.map((dish) => {
  //       return (
  //         <CardBody>
  //           <CardText>{dish.comment}</CardText>
  //           <CardText>{dish.date}</CardText>
  //         </CardBody>
  //       );
  //     });
  //     return comment;
  //   }
  renderdish(dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card key={dish.id}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
          <CardBody>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
  render() {
    if (this.props.dishes != null) {
      const rendercomments = this.props.dishes.comments.map((dish) => {
        console.log(dish);
        return (
          <CardBody>
            <CardText>{dish.comment}</CardText>
            <CardText>{dish.date}</CardText>
          </CardBody>
        );
      });
      return (
        <div className="row">
          {this.renderdish(this.props.dishes)}
          <div className="col-12 col-md-5 m-1">
            <Card key={this.props.dishes.comments.id}>
              <CardTitle>Comments</CardTitle>
              {rendercomments}
            </Card>
          </div>
        </div>
      );
    } else return <div></div>;
  }
}

export default DishDetail;
