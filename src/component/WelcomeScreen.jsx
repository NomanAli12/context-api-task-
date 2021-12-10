import React, { useContext } from 'react'
import { DataContext } from '../context/DataProviderContext'
import { Link } from "react-router-dom";


const WelcomeScreen = () => {
    const [data] = useContext(DataContext)
    console.log('data...', data)

    return (
        <div>
            <h1>value</h1>
            {data.map((value, i) => {
                return (
                    <div key={i}>
                        <h1>Welcome Screen</h1>
                        <h4>Your Name : {value.name}</h4>
                    </div>
                )
            })}
             
            <Link to='/search'>
                <button>Gif screen</button> 
            </Link>
            <Link to='/info'>
                <button>Info Screen</button>
            </Link>
        </div>
    )
}

export default WelcomeScreen
