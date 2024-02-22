import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const navToPage = () =>{
        navigate('')
    }
    return (
        <div>
            <h1>This is Home Page.</h1>
            <Link to="/about">Go to About Page</Link>
            <br />
            <button onClick={()=>navigate('/about')}>Go to About page</button>

            <br />
            <button onClick={()=>navigate('/filterer')}>Go to Filter page</button>
        </div>
    )
}

export default Home
