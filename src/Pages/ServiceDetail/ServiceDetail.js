import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const {serviceId} = useParams()
    return (
        <div>
            <h2>Service detail : {serviceId}</h2>

            <Link to='/checkout'><button className='btn btn-primary'>Proced Checkout</button></Link>
            <Link to='/'>Service</Link>
        </div>
    );
};

export default ServiceDetail;