import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardColumns
} from "reactstrap";
import "./card.css";

export default function Cards(Data) {
  return (
    <CardColumns className="container">
      <Card className="card">
        <CardBody>
          <CardTitle>{Data.name}</CardTitle>
          <CardTitle>{Data.model}</CardTitle>
          <CardSubtitle>Height: {Data.height}</CardSubtitle>
          <CardSubtitle>Hair Color: {Data.hairColor}</CardSubtitle>
          <CardSubtitle>Birth Year: {Data.birthYear}</CardSubtitle>
          <CardSubtitle>Gender: {Data.gender}</CardSubtitle>
          <CardSubtitle>Eye Color: {Data.eyeColor}</CardSubtitle>
          <Button>Read More</Button>
        </CardBody>
      </Card>
    </CardColumns>
  );
}
