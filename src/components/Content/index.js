import React, {useState} from 'react';

const Content = (props) => {

    const [counter, setCounter] = useState(0);

    return(
        <>
            <h1 data-testid="content">{props.title}</h1>
            <p data-testid="count">Count {counter} </p>
            <button type='button' onClick={()=> {setCounter(counter + 1)}} data-testid="button">Click Me</button>
        </>
    );
}

export default Content;