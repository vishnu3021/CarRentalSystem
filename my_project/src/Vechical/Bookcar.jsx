import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SelectedCar from "./SelectedCar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Ratingpage from "../RatingPage/Ratingpage";
import { cars } from './CarsDataMain';

export default function Bookcar(props) {
  const { id } = useParams();
  const selectedVehicle = cars.find((a) => a.brand === id);

  const booknow = () => {
    alert("Booked Successfully" + "" + ` Model:${selectedVehicle.model}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Inline styles for centering content
  const centerAlignStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // This ensures the content is vertically centered on the page
  };

  // Style for the button to increase its width
  const buttonStyle = {
    width: '300px', // Set your desired width here
    marginTop: '20px', // Optional: Add some space above the button
  };

  return (
    <div style={centerAlignStyle}>
      <SelectedCar
        image={selectedVehicle.image}
        image2={selectedVehicle.image2}
        image3={selectedVehicle.image3}
        price={selectedVehicle.price}
      />
      <h1> Model:{selectedVehicle.model}</h1>
      <br />
      <h1>Brand:{selectedVehicle.BrandName}</h1>
      <br />
      <h3>Engine:{selectedVehicle.engine}</h3>
      <br />
      <h3>Price:{selectedVehicle.price}</h3>
      <br />
      <h3>Type:{selectedVehicle.type}</h3>
      <Link to={`/carrents/booking/${selectedVehicle.brand}`} style={{ textDecoration: "none" }}>
        <Button variant="primary" style={buttonStyle}>Book Now!</Button>
      </Link>
      <Ratingpage />
    </div>
  );
}