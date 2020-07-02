import React from 'react';

export default function Counter() {
    const [counter, setCounter] = React.useState(0);

    return (
        <div>
            <h1>This is the counter app</h1>
            <div id="counter-value">{counter}</div>
            <button id="increment-btn" onClick={() => setCounter(counter + 1)}>Increment</button>
            <button id="decrement-btn" onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    );
}
