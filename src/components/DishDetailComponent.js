import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

function Renderdish({ dish }) {
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

function Rendercomments(props) {
  const dishcomments = props.dishes.comments.map((dish) => {
    return (
      <CardBody>
        <CardText>{dish.comment}</CardText>
        <CardText>{dish.date}</CardText>
      </CardBody>
    );
  });

  return dishcomments;
}

const dishdetail = (props) => {
  if (props.dishes != null) {
    return (
      <>
        <div className="col-12 col-md-5 m-1">
          <Renderdish dish={props.dishes} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <Card key={props.dishes.comments.id}>
            <CardTitle>Comments</CardTitle>
            <Rendercomments dishes={props.dishes} />
          </Card>
        </div>
      </>
    );
  } else return <div></div>;
};

export default dishdetail;
