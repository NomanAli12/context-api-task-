import React, { useContext } from 'react'
import { DataContext } from '../context/DataProviderContext'




const UserInformation = () => {
    const [data, setData] = useContext(DataContext)

    return (
        <div>
            <h1>using context here</h1>
            {data.map((value , i) => {
                return (
                    <div key={i}>
                        <h3>{value.name}</h3>
                        <h3>{ value.interest}</h3>
                    </div>
                )
            })}
            <iframe src="https://giphy.com/embed/NWg7M1VlT101W" width="480" height="267" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
    )
}

export default UserInformation
