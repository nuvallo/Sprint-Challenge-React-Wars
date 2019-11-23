import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card/card";

export default function StarWarsSpaceShips() {
  const [Data, setData] = useState([]);

  const API = () => {
    // step 3 -> axios calls API
    axios
      .get("https://swapi.co/api/starships")
      .then(response => {
        setData(response.data.results);
        console.log(response.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(API, []);

  return Data.map(DataValue => {
    return <Card manfacturer={DataValue.manfacturer} />;
  });
}
