import React, {useState} from 'react';
import './singleHotelComponent.css'

import {
  FaSmoking,
  FaChild,
  FaParking,
} from 'react-icons/fa';
import {
  MdPets,
  MdOutlineBalcony,
  MdElevator,
  MdFastfood,
} from 'react-icons/md';
import {
  TbAirConditioning,
  TbToolsKitchen2,
} from 'react-icons/tb';
import { AiOutlineWifi } from 'react-icons/ai';

const SingleHotelComponent = ({ onClick }) => {
  const [filters] = useState({
    smoking: true,
    pets: true,
    children: true,
    airConditioning: true,
    kitchen: true,
    balcony: true,
    elevator: true,
    restaurant: true,
    wifi: true,
    parking: true,
    inclusiveMeals: true,
  });

  const getFilteredIcons = () => {
    const icons = [];

    if (filters.smoking) icons.push(<div className="icons"><FaSmoking key="smoking" /></div>);
    if (filters.pets) icons.push(<div className="icons"><MdPets key="pets" /></div>);
    if (filters.children) icons.push(<div className="icons"><FaChild key="children" /></div>);
    if (filters.airConditioning) icons.push(<div className="icons"><TbAirConditioning key="airConditioning" /></div>);
    if (filters.kitchen) icons.push(<div className="icons"><TbToolsKitchen2 key="kitchen" /></div>);
    if (filters.balcony) icons.push(<div className="icons"><MdOutlineBalcony key="balcony" /></div>);
    if (filters.elevator) icons.push(<div className="icons"><MdElevator key="elevator" /></div>);
    if (filters.restaurant) icons.push(<div className="icons"><MdFastfood key="restaurant" /></div>);
    if (filters.wifi) icons.push(<div className="icons"><AiOutlineWifi key="wifi" /></div>);
    if (filters.parking) icons.push(<div className="icons"><FaParking key="parking" /></div>);

    return icons;
  };

  const handleClick = () => {
    onClick(); 
  };

  return (
    <div className='body-container' onClick={handleClick}>
      <div className='image-container'><div></div></div>
      <div className='description'>
        <div className='header'>
          <h2>Nazwa hotelu</h2>
          <div className='review-mark'>4.7</div>
        </div>
        <div className='header-content-container'>
          <p>Dodano: 02.04.2005</p>
          <p>| Lokalizacja</p>
        </div>
        <p className='dsc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in . . . </p>
        <div className='footer'>
          <div className='icons-container'>{getFilteredIcons()}</div>
          <button className='btn'>Zamów nocleg</button>
        </div>
      </div>
    </div>
  );
};

export default SingleHotelComponent;
