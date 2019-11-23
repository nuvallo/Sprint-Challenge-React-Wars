import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./search.css";

const Search = () => {
  return (
    <Form className="search">
      <FormGroup>
        <Label for="exampleEmail">Search Character</Label>
        <Input placeholder="Search Here" />
      </FormGroup>

      <Button>Search</Button>
    </Form>
  );
};

export default Search;
