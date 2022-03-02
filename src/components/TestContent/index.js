import React from 'react'

const TestContent = (props) => {

    if(props.name)
    {
        return <h1>TestContent {props.name}</h1>
    }
    else {
        return <h1>TestContent1</h1>
    }
}

export default TestContent;