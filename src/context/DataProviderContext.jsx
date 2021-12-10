import React, { useState  } from 'react'



 export const DataContext = React.createContext()


 export  const DataProviderContext = (props) => {

    const [data , setData ] = useState([])
    
    return (
        <div>
            <DataContext.Provider value={[data , setData]} >{props.children}</DataContext.Provider>
        </div>
    )
}


