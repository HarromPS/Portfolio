import React, {Suspense} from 'react';

const Loading = () =>{
  return(
    <> <div>Loading ...</div> </>
  )
}

const LazyComponent = () =>{
  return(
    <> 
    <ul>
      <li>Home 0</li>
      <li>Home 1</li>
      <li>Home 2</li>
      <li>Home 3</li>
      <li>Home 4</li>
      <li>Home 5</li>
    </ul>
    </>
  )
}
const Suspense_ = () => {
  return (
    <div>
      <h2 className='my-2'>Below is the implementation of Suspense</h2>
      <Suspense fallback={<Loading/>}>
          <LazyComponent/>
      </Suspense>
    </div>
  )
}

export default Suspense_