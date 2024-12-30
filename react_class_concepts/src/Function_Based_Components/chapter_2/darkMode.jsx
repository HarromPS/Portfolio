import React from 'react'

function darkMode(props) {
    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.handleModeChange} />
            <label className="form-check-label" style={props.modeStyle} htmlFor="flexSwitchCheckDefault">{props.mode !== undefined ? `${props.mode.charAt(0).toUpperCase() + props.mode.substring(1, props.mode.length)} Mode` : ""}</label>
        </div>
    )
}

export default darkMode;