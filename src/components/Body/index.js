import React, { useState } from "react";

const Body = (props) => {

const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    return(
        <>
            <h1 data-testid="title2">{props.title}</h1>
            <p data-testid="counter">{count}</p>
            <h1>TEST</h1>
            <button id="cihan2" type="button4" onClick={handleClick} data-testid="button5">BUTTON</button>
        </>

    );
}

export default Body;