import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    // use Location used to give the current location of URL
    let location = useLocation();

    let navigate = useNavigate();

    const handleLogout=()=>{
        localStorage.removeItem('auth-token');
        navigate("/login");
    }
    useEffect(() => {
        // eslint-disable-next-line
    }, [location]);      // runs every time location changes

    return (
        <nav data-bs-theme="dark" className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">iNoteBook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/user" ? "active" : ""}`} to="/user">Users</Link>
                        </li>
                    </ul>

                </div>

                {/* if user is not logged in then show the login or create new account btn  */}
                {!localStorage.getItem("auth-token")?<div >
                    <Link className="navbar-brand" to="/login">
                        <button className="btn btn-primary mx-1" type="submit">Login</button>
                    </Link>

                    <Link className="navbar-brand" to="/signup">
                        <button className="btn btn-primary mx-1" type="submit">Sign Up</button>
                    </Link>

                    {/* else show logout button  */}
                </div>: <button onClick={handleLogout} className="btn btn-primary">Logout</button>}

            </div>
        </nav>
    )
}
