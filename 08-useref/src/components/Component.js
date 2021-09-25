import React, { useState, useRef, useEffect } from 'react';

const Component = () => {
    const [count, setCount] = useState(0);
    const componentRef = useRef(true);
    useEffect(() => {
        return () => {
            componentRef.current = false
        }
    }, [])
    const fakerfetch = () => {
        console.log('fakefetch executed');
        setTimeout(()=>{
            if (componentRef.current)
                setCount(count+1)
        }, 2000);
    }
    return (
        <div>
            <h1>Component counter: {count}</h1>
            <button onClick={fakerfetch}>faker</button>
        </div>
    )
}

export default Component
