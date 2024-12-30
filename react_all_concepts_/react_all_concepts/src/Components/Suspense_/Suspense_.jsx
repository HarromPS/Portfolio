import {Suspense} from 'react';

const Loading = () =>{
  return(
    <> <div>Loading ...</div> </>
  )
}

const LazyComponent = () =>{
  return(
    <> 
   <ul>
      
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