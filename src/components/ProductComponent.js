import React, { Component } from "react";
import { PRODUCTS } from "../shared/product";
import { Button, Table, InputGroup, Input } from "reactstrap";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: PRODUCTS
    };
  }
  render() {
    const prod = this.state.product.map((prd, count) => {
      return (
        <div>
          <Table bordered xs="1" sm="2" md="4" border="1">
            <tbody>
              <tr>
                <th scope="row">{count + 1}</th>
                <td>{prd.id}</td>
                <td>{prd.name}</td>
                <td>{prd.price}</td>
                <td>
                  <InputGroup>
                    <Input
                      placeholder="Number"
                      min={0}
                      max={10}
                      type="number"
                      step="1"
                    />
                  </InputGroup>
                </td>
                <td>
                  <Button color="secondary" size="lg">
                    Add
                  </Button>
                </td>
                <td>
                  <Button color="secondary" size="lg">
                    Remove
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
    });
    return (
      <div>
        <h1>This is Product Component.</h1>
        <Table bordered xs="1" sm="2" md="4" border="1">
          <thead>
            <tr>
              <th>#</th>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Price($/Month)</th>
              <th>No. of Items</th>
              <th>Add</th>
              <th>Remove</th>
            </tr>
          </thead>
        </Table>
        <div>{prod}</div>
        <Button color="secondary" size="lg">
          Submit
        </Button>
      </div>
    );
  }
}

export default Product;
