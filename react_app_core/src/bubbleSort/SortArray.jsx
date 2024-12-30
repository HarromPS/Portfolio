// Visualizing bubble sort
/*

step 1:
Idea: 
1. create a row of numbers listed 
2. create a button to play bubble sort
3. created 
*/
import { useRef, useState } from "react";
import { 
  generateArray, 
  checkSortArray, 
  moveRight, 
  moveLeft, 
  resetArray 
} from "./redux/state/arraySlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const SortArray = () => {

  const arr = useSelector(state => state.array.value);
  const arrayStatus = useSelector(state => state.array.status);
  const dispatch = useDispatch();

  let sizeOfArray = useRef(1);  // default size 1
  const [elementIndex,setElementIndex] = useState(null);

  return (
    <>
      <div className="absolute flex align-middle w-full h-full justify-center text-[18px]">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center flex-wrap">

            {
              arr.map((item, index) => {
                return (
                  <>
                    <div
                      key={item.id}
                      id={index}
                      className="my-2"
                      onClick={(item) => {
                        setElementIndex(parseInt(item.currentTarget.id));
                      }}>
                        {/* select this element to move */}
                      <div
                        className={`px-4 py-2 min-w-[100px] min-h-[100px] text-[24px] font-bold ${elementIndex!=null ? (elementIndex.toString() === index.toString() ? `block` : `hidden`) : `` } `}
                      >&darr;</div>

                      <div
                        className={`flex items-center justify-center min-w-[100px] min-h-[100px] px-4 py-2 border-2 border-black text-[24px] font-bold cursor-pointer ${arrayStatus === null || arrayStatus === 'unsorted'? `bg-red-500` : `bg-blue-500`} `}
                      >{item.ele}</div>

                    </div >

                  </>
                )
              })
            }
          </div>
          <div className="my-4 text-[20px]">
            <button
              className="font-bold border-2 border-black bg-black px-3 py-1 text-white mx-2"
              onClick={() => {
                if(elementIndex!=null){
                  dispatch(moveLeft(elementIndex));
                  setElementIndex((elementIndex-1+arr.length)%arr.length);
                  
                }
              }}>&#8592;</button>
            <button
              className="font-bold border-2 border-black bg-black px-3 py-1 text-white mx-2"
              onClick={() => {
                if (elementIndex != null) {
                  dispatch(moveRight(elementIndex));
                  setElementIndex((elementIndex + 1) % arr.length);
                  
                }
              }}>&#8594;</button>
          </div>
          <p className="font-bold text-[20px]">Status: {arrayStatus===null || arrayStatus === "unsorted"? `Unsorted`:arrayStatus}</p>
        </div>
        <div className="absolute bottom-0">
          <input ref={sizeOfArray} className="border-2 border-black m-2 p-2" type="number" id='size' placeholder='size of array' />
          <button className="border-2 border-black text-bold m-2 p-2 bg-gray-700 text-white" onClick={() => { 
            dispatch(generateArray(sizeOfArray.current.value)) 
            
          }} >Generate Array</button>
          <button className="border-2 border-black text-bold m-2 p-2 bg-gray-700 text-white" onClick={() => { 
            dispatch(checkSortArray());
            setElementIndex(null);
          }} >Check</button>
          <button className="border-2 border-black text-bold m-2 p-2 bg-gray-700 text-white" onClick={() => { 
            dispatch(resetArray()) 
            
          }} >Reset</button>
        </div>
      </div >
    </>
  )
}

export default SortArray;

// (function (i) { 
//   return function () {
//     x.value = i * 2 
//   }
// })(i)