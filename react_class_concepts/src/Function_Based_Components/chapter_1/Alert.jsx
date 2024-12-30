import React from 'react'

function Alert(props) {
  return (
    // initially null, but handled using a Special syntax

    props.alerts && <div className={`alert alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
      <strong>{props.alerts.type!==undefined?props.alerts.type[0].toUpperCase()+props.alerts.type.slice(1)+"!":""}</strong> {props.alerts.message}
      {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  );
}

export default Alert;