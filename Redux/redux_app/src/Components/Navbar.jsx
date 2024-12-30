import React from 'react';
import {useSelector} from "react-redux";

const Navbar = () => {
    // get a state from the store
    // read only states
    const amount = useSelector(state => state.amount);
    const amountNumber = useSelector(state => state.amountNumber);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href={() => false}>Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href={() => false}>State Bank Application</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={() => false}>Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href={() => false} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href={() => false}>Action</a></li>
                                <li><a className="dropdown-item" href={() => false}>Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href={() => false}>Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true" href={() => false}>Disabled</a>
                        </li>
                    </ul>
                    <div>
                        <div className="btn btn-primary mx-2 pe-none">Balance: {amount}</div>
                        <div className="btn btn-primary mx-2 pe-none">Number: {amountNumber}</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar