import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h1>This is About Page</h1>
            <Link to="/">Go to Home Page</Link>
            <li>
                <Link to="/User/manish"> Manish </Link>
            </li>
            <li>
                <Link to="/User/peter"> Peter </Link>
            </li>
        </div>
    )
}

export default About
