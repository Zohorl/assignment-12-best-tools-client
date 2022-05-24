import React from 'react';
import { useNavigate } from 'react-router-dom';
import SharedButton from '../Shared/SharedButton';

const Tool = ({ tool }) => {
    console.log(tool)
    const { _id, image, name, price, description } = tool;
    const navigate = useNavigate();




    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={image} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4 className='text-xl'>Price : ${price}</h4>
                <p>{description}</p>
                <div className="card-actions justify-center">
                    <SharedButton>Book Now</SharedButton>
                </div>
            </div>
        </div>
    );
};

export default Tool;