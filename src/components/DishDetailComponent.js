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
  renderdish(dish) {
    return (
      <Card key={dish.id}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
        <CardBody>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }
  render() {
    if (this.props.dishes != null) {
      const rendercomments = this.props.dishes.comments.map((dish) => {
        return (
          <CardBody>
            <CardText>{dish.comment}</CardText>
            <CardText>{dish.date}</CardText>
          </CardBody>
        );
      });
      return (
        <>
          <div className="col-12 col-md-5 m-1">
            {this.renderdish(this.props.dishes)}
          </div>
          <div className="col-12 col-md-5 m-1">
            <Card key={this.props.dishes.comments.id}>
              <CardTitle>Comments</CardTitle>
              {rendercomments}
            </Card>
          </div>
        </>
      );
    } else return <div></div>;
  }
}

export default DishDetail;
