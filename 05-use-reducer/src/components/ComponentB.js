import React, { useContext } from 'react'
import { Button, ButtonGroup, Badge } from 'reactstrap';

import {CounterContext} from '../App';

import ComponentC from './ComponentC';

import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentB = () => {
    const countercontext = useContext(CounterContext);
    console.log(countercontext);
    const {counter, dispatch} = countercontext;
    return (
        <div>
            <ButtonGroup>
                <Button color="primary" outline>
                    ComponentB Counter <Badge color="secondary">{counter}</Badge>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={()=>{dispatch({type:'increment', payload:1})}}>increment +1</Button>
                <Button color="dark" onClick={()=>{dispatch({type:'decrement', payload:1})}}>decrement -1</Button>
                <Button color="danger" onClick={()=>{dispatch({type:'reset'})}}>reset</Button>
            </ButtonGroup>     
            <p></p>
            <ComponentC />
        </div>
    )
}

export default ComponentB
