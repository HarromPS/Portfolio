import React from 'react'

export const Alerts = (props) => {
    return (
        <div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{props.tag} </strong>{props.message}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    );
}
