import React from 'react';
import faker from 'faker';

const Contact = () => {
    return (
        <div>
            <div className="container">
                <h4 className="center">Contact</h4>
                <p>{ `${faker.lorem.paragraph()}` }</p>
            </div>
        </div>
    )
}

export default Contact
