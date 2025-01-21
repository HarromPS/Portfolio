import { useState, useCallback } from 'react';
import Child from './Child';

const MemoFunction = () => {
    const [count, setcount] = useState(0);

    // in react when rendering happens, functions are re initialized 
    // so below function changes on every render, when this function rerenders
    // const getValue = () => {
    //     return "another";
    // }

    // to stop this, such functions are cached using useCallback
    // returns cached function which stays same even if counter increases
    // const getValue = useCallback(()=>{
    //     return "another" + count;
    // },[]);
    
    // when dependency array is changed, it re-return a new function called 
    const getValue = useCallback(()=>{
        return "another " + count;
    },[count]);

    return (
        <div>
            <Child getValue={getValue} propValue={"good"} />

            <button
                onClick={() => {
                    setcount((count) => count + 1);
                }}
                className="m-2 p-2 border-2 "
            >
                Count: {count}</button>
        </div>
    )
}

export default MemoFunction