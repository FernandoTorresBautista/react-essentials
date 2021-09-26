import React, {useEffect} from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    // console.log("navbar: ", props);
    // useEffect((props) => {
    //     setTimeout(()=> {
    //         props.history.push('/about');
    //     }, 2000);
    // }, [])
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="nav nav-tabs">
                    <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-item nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
