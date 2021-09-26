import React from 'react';
import faker from 'faker';

const About = () => {
    return (
        <div>
            <div className="container">
                <h4 className="center">About</h4>
                <p>{ `${faker.lorem.paragraph()}` }</p>
            </div>
        </div>
    )
}

export default About
