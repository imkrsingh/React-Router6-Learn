import{Link,Outlet} from "react-router-dom"

const Contact = () => {
    return (
        <div>
            <h1> Contact us Page.</h1>
            <h2>Here we have some other Links</h2>
            <Link to="company">Company</Link>
            <Link to="channel">Channel</Link>
            <Link to="other">Other</Link>
            <Outlet/>
        </div>
    )
}

export default Contact
