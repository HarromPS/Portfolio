import React from 'react'

// Default Prototypes
import PropTypes from 'prop-types'

// Only one default export allowed per module
// export default function name(){
//     return 1;
// }

// for routing we use <LINK to="" /> insted of <a href="" />
import { Link } from "react-router-dom";

// default export, by just name directly in Parent Component
export default function header(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">

                    {/* props: JS objects passed from Parent Components to Child Components */}
                    {props.title}

                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>

                    {/* using props as a new syntax */}

                    {
                        // check for a boolean
                        props.searchBar ?

                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>

                            :
                            "no search bar"
                    }
                </div>
            </div>
        </nav>
    )
}


// set prop types here as object
header.propTypes = {
    // like title coming will be a string
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired

    // if bool, received a number=> error (if default value is not provided)

}

// Default prop types: When no args/props are passed from Parent component, default props are used
header.defaultProps = {
    title: "The Title",
    // searchBar: true
}

