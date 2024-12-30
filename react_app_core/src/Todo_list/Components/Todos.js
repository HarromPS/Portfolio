import React from 'react'

// Named export from Child to Parent Component use curley braces while improting
// import {TodoItems} from "./TodoItems.js";

// props: JS objects passed from Parent Components to Child Components
// we can use destructuring also
// export const Todos = ({title, name}) => {
//   return (
//     <div className="container">
//       {/* {title}
//       {name} */}
//     </div>
//   )
// }

// import todoList component
import { TodoItem } from "./TodoItems.js";

export const Todos = (props) => {
  return (
    <div className="container ">
      <h3 className="text-center my-3 ">ToDo List</h3>

      {/* {console.log(props.Todos_list)} */}
      {/* <TodoItem list={props.Todos_list[0]} /> */}
      {/* using higher order map function */}

      {props.Todos_list.length === 0 ? "All Todos are completed" : props.Todos_list.map((ele) => {
          return (
            <>
              {/* <h3>This</h3> */}
              {/* passing the args from App.js to Todoitems */}
              {/* Warning: Each child in a list should have a unique "key" prop. */}
              {/* when no todos are remaining in UI display All todos are done */}

              <TodoItem todo={ele} key={ele["srNo"]} onDelete={props.onDelete} />
              <hr />

            </>
          )
        })
      }

    </div>
  )
};
