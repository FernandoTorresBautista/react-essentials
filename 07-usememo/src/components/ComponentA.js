import React, {useEffect} from 'react';
let renderCounter = 1;
const ComponentA = (props) => {
    useEffect(() => {
        renderCounter++
    })
    return (
        <div>
            <h1>
                ComponentA: render {renderCounter} || Counter: {props.count}
            </h1>
        </div>
    )
}

export default ComponentA
