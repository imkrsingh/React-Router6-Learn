import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h1>This is About Page</h1>
            <Link to="/">Go to Home Page</Link>
            <li>
                <Link to="/User/Manish"> Manish </Link>
            </li>
            <li>
                <Link to="/User/Peter"> Peter </Link>
            </li>
            <li>
                <Link to="/User/Bruce"> Bruce </Link>
            </li>
        </div>
    )
}

export default About
