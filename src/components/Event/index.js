
import react, { useState } from 'react'
const Event = (props) => {

    const [event, setEvent] = useState(false);

    return (
        <button
          onClick={() => {
            setEvent(!event);
            props.onChange(!event);
          }}
          data-testid="toggle"
        >
          {event === true ? "Turn off" : "Turn on"}
        </button>
      );
}   

export default Event;