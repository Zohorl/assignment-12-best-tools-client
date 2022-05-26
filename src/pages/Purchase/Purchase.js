import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Purchase = () => {

    const [userQuantity, setUserQuantity] = useState(null);
    const [tool, setTool] = useState({});
    // console.log(tool)
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`http://localhost:5000/tool/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, []);

    const quantity = parseInt(tool.minimumQuantity);

    const getInputValue = (event) => {
        const userValue = event.target.value;
        setUserQuantity(userValue);
    };

    const handleQuantity = () => {
        if (userQuantity && userQuantity > 0) {
            const newQuantity = parseInt(quantity) + parseInt(userQuantity);
            const setQuantity = { newQuantity }
            const url = `http://localhost:5000/tool/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(setQuantity)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
        else {
            alert('Please enter valid data')
        }
    }

    const navigateToMyOrder = () => {
        navigate('/dashboard');
    };


    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={tool.image} alt={tool.name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{tool.name}</h2>
                    <h4 className='text-xl'>Price : ${tool.price}</h4>
                    <p className='text-lg'>availableQuantity: {tool.availableQuantity}</p>
                    <p className='text-lg'>minimumQuantity: {tool.minimumQuantity}</p>
                    <p>{tool.description}</p>
                    <div className="card-actions justify-center">
                        <button onClick={navigateToMyOrder} className="btn btn-primary">Ordered</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <input type="number" placeholder="Type here" class="input input-bordered input-success w-50 max-w-xs" onChange={getInputValue} />
                <br />
                <input onClick={handleQuantity} className=' btn bg-gradient-to-r from-secondary to-primary border-none uppercase text-white' type="button" value="Add" />
            </div>
        </div>
    );
};

export default Purchase;