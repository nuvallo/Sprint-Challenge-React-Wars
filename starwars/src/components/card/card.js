import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./card.css";

export default function Cards(Data) {
  return (
    <div>
      <Card className="card-div">
        <CardBody>
          <CardTitle className="title">{Data.name}</CardTitle>
          <CardSubtitle>Height: {Data.height}</CardSubtitle>
          <CardSubtitle>Hair Color: {Data.hairColor}</CardSubtitle>
          <CardSubtitle>Birth Year: {Data.birthYear}</CardSubtitle>
          <CardSubtitle>Gender: {Data.gender}</CardSubtitle>
          <CardSubtitle>Eye Color: {Data.eyeColor}</CardSubtitle>
          <CardText>{Data.homeWorld}</CardText>
          <Button className="btn">Read More</Button>
        </CardBody>
      </Card>
    </div>
  );
}
