import React from 'react';
import ParentToChild from "./Parents_To_Child/Parent";
import ChildToParent from "./Child_To_Parents/Parent";

const PropDrilling = () => {
  return (
    <div>
         {/* Parent to Child: Prop Drilling */}
         <h1></h1>
        <ParentToChild /> 

        <hr style={{width:"90%",margin:"auto"}}/>

        {/* Child to Parent: Function callback */}
        <ChildToParent/>
    </div>
  )
}

export default PropDrilling