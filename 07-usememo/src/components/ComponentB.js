import React, {useEffect} from 'react';
let renderCounter = 1;
const ComponentB = (props) => {
    useEffect(() => {
        renderCounter++
    })
    return (
        <div>
            <h1>
                ComponentB: render {renderCounter} || Counter: {props.count}
            </h1>
        </div>
    )
}

export default ComponentB
