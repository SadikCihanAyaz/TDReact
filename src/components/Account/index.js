import react, { useEffect, useState } from 'react'

const Account = (props) => {

    const [resultList, setResultList] = useState(null);


    const getAccount = async ()=>{
        const result = await fetch('/');
        setResultList(await result.json())
    }

    useEffect(() => {
        getAccount(props.id);
    },[props.id])


    if(!resultList)
    {
        return('Loading')
    }

    return (
        <div>
            <p>{resultList.name}</p>
            <p>{resultList.prodCode}</p>
        </div>
    )
    

}

export default Account;