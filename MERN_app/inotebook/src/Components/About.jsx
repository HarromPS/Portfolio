import React from 'react';
// import React, { useContext, useEffect } from 'react';
// import NoteContext from '../Context/Notes/NoteContext';

// Using the context & accessing all the state variables using the provider
export const About = () => {
  // a has all the state variables
  // const a = useContext(NoteContext);

  // useEffect(()=>{
  //   // a.update();
  //   // eslint-disable-next-line
  // },[]);

  return (
    <div >
      This is About page.
      {/* {a.state.name} and is in class {a.state.class} */}
    </div>
  )
}
