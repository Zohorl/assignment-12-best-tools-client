import React from 'react';
import useTools from '../../hooks/useTools';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useTools();
    console.log(tools)
    return (
        <div className='mt-36'>
            <h2 className='text-5xl text-black font-bold text-center uppercase'>Our Tools</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;