import React from 'react';
import { useParams } from "react-router-dom";
import { cars } from './CarsDataMain';
import OrderCard from '../OrderPage/OrderCard';
import "../Vechical/Card.css"
import "./Card.css";

export default function Bookingpage() {
      const { id } = useParams();
      const selectedVehicle = cars.find((a) => a.brand === id);
  return (
    <div>
      <OrderCard BrandName={selectedVehicle.BrandName} brand={selectedVehicle.brand} image={selectedVehicle.image} price={selectedVehicle.price}/>
        {/* <h1> Booking Page </h1> */}

    </div>
  )
}
