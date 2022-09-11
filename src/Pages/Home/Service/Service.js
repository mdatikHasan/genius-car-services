import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name, img, description, price, id} = service;
    const navigate = useNavigate()

    const navigateSeriviceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <p>{description}</p>
            <button onClick={()=>navigateSeriviceDetail(id)}>Book: {name}</button>
        </div>
    );
};

export default Service;