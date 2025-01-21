import {memo} from 'react'

const Child = ({ propValue, getValue }) => {
    console.log("Child is rendered");
    return (
        <div>
            <button
                onClick={() => {
                    getValue()
                }}
                className="m-2 p-2 border-2 "
            >
                Prop: {getValue()}</button>
        </div>
    )
}

export default memo(Child); // caches the component and avoid re-render until props are not changed