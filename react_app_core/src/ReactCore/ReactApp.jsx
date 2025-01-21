import React from 'react';

// A simple react component 
const ReactApp = () => {
  return (
    <>

      {/* returns react element */}
      <div>ReactApp</div>

      <div className="greetings">hello</div>

    </>
  )
}


// what it actually returns => an object 
console.log(ReactApp());

/*
{
  "type": "div",      // type represents root element i.e div 
  "key": null,        // null
  "ref": null,        // null 

  "props": {                  // child components of div element as propsx``
    "children": "ReactApp"  
  },
  "_owner": null,
  "_store": {}
}
*/

// React component when consoled 
console.log(<ReactApp/>); 

/*
{
  "key": null,
  "ref": null,
  "props": {},
  "_owner": null,
  "_store": {}
}
*/
export default ReactApp