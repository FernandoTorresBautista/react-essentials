import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ButtonGroup} from 'reactstrap';
import useCounter from '../customhook/useCounter';

const ComponentA = () => {
    const [count, increment, decrement, reset] = useCounter(10);
    return (
        <div>
            <ButtonGroup>
                <Button color="primary" outline>
                    ComponentA Counter <span color="secondary">{count}</span>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={increment}>increment +1</Button>
                <Button color="dark" onClick={decrement}>decrement -1</Button>
                <Button color="danger" onClick={reset}>reset</Button>
            </ButtonGroup>     
            <p></p>
        </div>
    )
}

export default ComponentA
