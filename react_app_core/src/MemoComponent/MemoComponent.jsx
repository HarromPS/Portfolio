import { useMemo, useState } from "react";

// create a array which returns a index and a boolean 
// returns array of objects, with only true value at index 29,00,000
const nums = new Array(100_00_000).fill(0).map((_, i) => {
    return {
        index: i,
        isMagical: i === 99_00_000 ? true : false
    };
});

const MemoComponent = () => {
    const [count, setcount] = useState(0);

    // intially calculates & stores the array in 1st rendering of component
    const [number, setnumber] = useState(nums);

    // find that true object, Very expensive computation
    // const magicalNumber = number.find(item => (item.isMagical === true));

    // So using useMemo hook to cached result of calculation betn renders 
    // number is calculated when dependency array changes
    const magicalNumber = useMemo(() => {
        // function which does expensive calculation
        return number.find(item => item.isMagical === true);
    }, []);

    return (
        <div>
            <p className="uppercase m-2 p-2">Magical Number is: {magicalNumber.index}</p>

            {/* When clicked & count is changed, component is re-rendered (core of react re-rendering) */}
            <button
                onClick={() => {
                    setcount((count) => count + 1);

                    if (count === 10) {
                        // changing dependency array
                        setnumber(() => {
                            return new Array(100_00_000).fill(0).map((_, i) => {
                                return {
                                    index: i,
                                    isMagical: i === 99_00_000 ? true : false
                                };
                            });
                        })
                    }
                }}
                className="m-2 p-2 border-2 "
            >
                Count: {count}</button>
        </div>
    )
}

export default MemoComponent