import React, {useEffect} from 'react';
let renderCounter = 0

const ComponentA = () => {
    useEffect(() => {
        renderCounter++
    })
    return (
        <div>
            <h1>
                ComponentA: render {renderCounter}
            </h1>
        </div>
    )
}

export default ComponentA
