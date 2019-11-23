import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card/card";

export default function StarWarsPeople() {
  const [people, setPeople, starShip, setStarShip] = useState([]);

  const People = () => {
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        setPeople(response.data.results);
        console.log(response.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(People, []);

  return people.map(DataValue => {
    return (
      <Card
        name={DataValue.name}
        StarShip={DataValue.name}
        height={DataValue.height}
        hairColor={DataValue.hair_color}
        birthYear={DataValue.birth_year}
        gender={DataValue.gender}
        eyeColor={DataValue.eye_color}
      />
    );
  });
}
