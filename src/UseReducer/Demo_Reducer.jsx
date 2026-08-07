import React, { useReducer } from 'react'

function Demo_Reducer() {
    var initialState = 0;

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return state + 1;
            case "decrement":
                return state - 1;
            case "multiply":
                return state * 2;
            default:
                return state;
        }
    };
    var [state, dispatch] = useReducer(reducer, initialState);
    return (<>
    <p>{state}</p>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "multiply" })}>*</button>
    </>)
}

export default Demo_Reducer