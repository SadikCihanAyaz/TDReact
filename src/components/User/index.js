import react, { useEffect, useState } from 'react'

const User = (props) => {

    const [user, setUser] = useState(null);

    const getFetchUser= async ()=>{
        const result = await fetch('/');
        setUser(await result.json());
    }

    useEffect(() => {
        getFetchUser(props.id);
    }, [props.id])

    if(!user)
    {
        return ('Loading');
    }

    return (
        <div>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.address}</p>
        </div>
    )


}

export default User;