import React from 'react';
import faker from 'faker';

const Home = () => {
    return (
        <div>
            <div className="container">
                <h4 className="center">Home</h4>
                <p>{ `${faker.lorem.paragraph()}` }</p>
            </div>
        </div>
    )
}

export default Home
