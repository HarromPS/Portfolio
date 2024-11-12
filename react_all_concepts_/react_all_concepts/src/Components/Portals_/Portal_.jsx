import React from 'react'
import { createPortal} from "react-dom";

const Portal_ = () => {
    return (
        <>
            <div>
                {
                    createPortal(
                        <p>This is an HTML element which opens as a dialog box in document body</p>,
                        document.getElementById("root")
                    )
                }
                There is a portal below which opens in a dialog box
            </div>
        </>
    )
}

export default Portal_