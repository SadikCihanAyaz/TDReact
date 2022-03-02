import react from 'react'

const War = (props) => {

    if(props.war)
    {
        return (<h2>War exist! {props.war}</h2>)
    }
    else {
        return (<h2>War doesnt exist</h2>);
    }

}

export default War;