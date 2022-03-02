import React, { useState } from "react";

const Body = (props) => {

const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    return(
        <>
            <h1 data-testid="title">{props.title}</h1>
            <p data-testid="counter">Counter {count}</p>
            <button type="button" onClick={handleClick} data-testid="button">BUTTON</button>
        </>

    );
}

export default Body;