import react, { useEffect, useState } from 'react';

const User = (props) => {

    const [user, setUser] = useState(null);

    const getFetchUser = async(id) => {
        const result = await fetch('/' +id);
        setUser(await result.json());
    }

    useEffect(()=> {
        getFetchUser(props.id);
    }, [props.id])

    if(!user)
    {
        return 'Loading';
    }

    return (
        <div>
            <p>{user.name}</p>
            <p>{user.surname}</p>
            <p>{user.address}</p>
        </div>
    )

}

export default User;