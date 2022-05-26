import React from 'react';
import useTools from '../../hooks/useTools';

const MyOrders = () => {
    const [tools, setTools] = useTools();

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure ?');
        if (proceed) {
            const url = `http://localhost:5000/tool/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = tools.filter(tool => tool._id !== id);
                    setTools(remaining);
                })
        }
    }

    return (
        <div className='justify-center'>
            <h3 className='text-4xl'>My Orders !!!!</h3>
            {
                tools.map(tool => <>
                    <div className="card w-96 bg-base-100 shadow-xl mt-5">
                        <div className="card-body">
                            <div className="card-actions justify-end">
                                <button onClick={handleDelete} className="btn btn-square btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <p className='text-xl'>{tool.name}</p>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default MyOrders;