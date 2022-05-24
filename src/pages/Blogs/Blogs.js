import React from 'react';

const Blogs = () => {
    return (
        <div className="card card-compact w-fit	bg-base-100 shadow-xl mx-auto mt-22">
            <div className="card-body">
                <h2 className="card-title">Q-1: How will you improve the performance of a React Application?</h2>
                <div className='text-xl'>
                    <p>1. Keeping component state local where necessary.</p>
                    <p>2. Memoizing React components to prevent unnecessary re-renders.</p>
                    <p>3. Code-splitting in React using dynamic import()</p>
                    <p>4. Windowing or list virtualization in React.</p>
                    <p>4. Lazy loading images in React.</p>
                </div>
                <h2 className="card-title">Q-2: What are the different ways to manage a state in a React application?</h2>
                <div className='text-xl'>
                    <p>There are four main types of state is properly manage in React apps :</p>
                    <p>1. Local (UI) state __ Local state is data we manage in one or another component.</p>
                    <p>2.Global (UI) state __ Global state is data we manage across multiple components.</p>
                    <p>3. Server state __ Data that comes from an external server that must be integrated with our UI state.</p>
                    <p>4. URL state __ Data that exists on our URLs, including the pathname and query parameters.</p>
                </div>
                <h2 className="card-title">Q-3: How does prototypical inheritance work?</h2>
                <div className='text-xl'>
                    <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                </div>


            </div>
        </div>
    );
};

export default Blogs;