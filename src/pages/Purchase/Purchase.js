import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Purchase = () => {

    const [userQuantity, setUserQuantity] = useState(null);
    const [tool, setTool] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();


    // useEffect(() => {
    //     fetch(`http://localhost:5000/tool/${id}`)
    //         .then(res => res.json())
    //         .then(data => setTool(data))
    // }, [tool]);


    const getInputValue = (event) => {
        const userValue = event.target.value;
        setUserQuantity(userValue);
    };

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <input type="number" placeholder="Type here" class="input input-bordered input-success w-50 max-w-xs" onChange={getInputValue} />
                <br />
                <input className=' btn bg-gradient-to-r from-secondary to-primary border-none uppercase text-white' type="button" value="Add" />
            </div>
        </div>
    );
};

export default Purchase;