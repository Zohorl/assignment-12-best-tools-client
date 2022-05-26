import React from 'react';
import { useNavigate } from 'react-router-dom';


const Tool = ({ tool }) => {
    // console.log(tool)
    const { _id, image, name, price, description } = tool;
    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`);
    };


    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={image} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4 className='text-xl'>Price : ${price}</h4>
                <p>{description}</p>
                <div className="card-actions justify-center mt-3">
                    <button onClick={() => navigateToPurchase(_id)} className="btn bg-gradient-to-r from-secondary to-primary border-none uppercase text-white">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;