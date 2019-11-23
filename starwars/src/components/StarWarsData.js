import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card/card";

export default function StarWarData() {
  const [Data, setData] = useState([]);

  const Swapi = () => {
    // step 3 -> axios calls API
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        setData(response.data.results);
        console.log(response.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(Swapi, []);

  return Data.map(DataValue => {
    return (
      <Card
        name={DataValue.name}
        height={DataValue.height}
        hairColor={DataValue.hair_color}
        birthYear={DataValue.birth_year}
        gender={DataValue.gender}
        eyeColor={DataValue.eye_color}
      />
    );
  });
}
