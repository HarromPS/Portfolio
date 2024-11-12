import React from 'react'
import GrandChild from './GrandChild';

const Child = (props) => {
  return (
    <div>
        Parent's State here: {props.color}
        <p>&darr;</p>
        <GrandChild color={props.color}/>
    </div>
  )
}

export default Child