import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import { cars } from "../Vechical/CarsDataMain";
import { useParams } from "react-router-dom";
import "../Vechical/Card.css";

function OrderCard(props) {
  const cardStyle = {
    width: "44vh",
    height: "43rem", // Ensures uniform height
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "11%",
  };

  const cardBodyStyle = {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1, // Ensures consistent spacing in the card body
    justifyContent: "center",
  };
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sucessfully book" + "   " + props.BrandName);
  };
  const { id } = useParams();
  const selectedVehicle = cars.find((a) => a.brand === id);
  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body style={cardBodyStyle}>
        <Card.Title>Booking Car</Card.Title>
        <Card.Text>
          Brand Name: <b> {props.BrandName} </b>
          <br />
          Price: <b> {props.price} </b>
          <br />
          brand: {props.brand}
        </Card.Text>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="fromDate">
            <Form.Label>From:</Form.Label>
            <Form.Control type="date" required />
          </Form.Group>
          <Form.Group controlId="toDate">
            <Form.Label>To:</Form.Label>
            <Form.Control type="date" required />
            <Form.Control as="select" required>
              <option value="">-- Choose Payment Method --</option>
              <option value="option1">Pay at offline </option>
              <option value="option2" disabled>
                UPI
              </option>
              {/* <option value="option3">Option 3</option> */}
            </Form.Control>
            <Form.Check
              type="checkbox"
              label={
                <>
                  <span className="text-danger">*</span> I understand that once
                  booked, it cannot be canceled.
                </>
              }
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default OrderCard;
