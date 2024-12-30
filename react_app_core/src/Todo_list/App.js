// import logo from './logo.svg';

import './App.css';

// Default exports
import Header from "./Components/header.js";

// Only one default export allowed per module
// import Name from "./Components/header.js";

// Named export from Child to Parent Component use curley braces while improting
import { Todos } from "./Components/Todos.js";
import { Footer } from "./Components/footer.js";
import { About } from "./Components/About"; import { Add_todos } from "./Components/Add_todos";
import React, { useState, useEffect } from "react";

// React uses camelCase


// Routing

import { BrowserRouter, Route, Routes } from "react-router-dom";
// let name = "Amit";

// function App() {
//   return (
//     // diff. btn HTML and JSX: class="App-header" className="App-header"

//     // Called as React JSX fragment (App says there should be only one element wrapped in open & closed braces <> </> )
//     <>

//       {/* This a comment */}

//       {/* Add More elements now */}
//       <nav>
//         <li>Home</li>
//         <li>Contact</li>
//         <li>Services</li>
//       </nav>

//       <div className="App-header">

//         {/* JSX is HTML with some changes
//             e.g class = className
//                 for  = htmlFor
//                 As class & for are reserved keywords

//             JSX represents Object
//             "Babel" compiles JSX to React.createElement() calls

//             e.g const ele = {
//                   <h1 className="H1">
//                         Hello
//                   </h1>
//                 }

//                 To

//                 const ele = React.createElement(
//                     type: "h1",
//                     props: {
//                         className: "H1",
//                         forIndex: 0
//                       }
//                 )
//         */}

//         {/* Anything inside curley braces is JVASCRIPT in React funciton based components */}
//         <h1>Hello {name} </h1>
//         Hello World
//       </div>


//     </>
//   );
// }

// props: JS objects passed from Parent Components to Child Components


function App() {

  let initTodoList;
  // show stored data is rendered when app runs
  if (localStorage.getItem("item") === null) {
    initTodoList = [];
    // console.log(null);
  }
  else {
    initTodoList = JSON.parse(localStorage.getItem("item"));
    // console.log(initTodoList);
  }

  // passing all to todosItems

  // pass init todo list to todo_list to display on UI
  const [todos_list, setList] = useState(initTodoList);
  // {
  //   srNo: 1,
  //   title: "Go to the market",
  //   desc: "Get this job done"
  // },
  // {
  //   srNo: 2,
  //   title: "Go to the school",
  //   desc: "Get assignment job done"
  // },
  // {
  //   srNo: 3,
  //   title: "Go to the park",
  //   desc: "Take your dog for a walk"
  // }
  // ]);

  // ondelete function
  const onDelete = (todos) => {
    console.log("Function of ondelete todo ", todos);

    // deleting this way in react do not work

    // let index = todos_list.indexOf(todos);
    // todos_list.splice(index,1);

    // using hooks to update the cards

    setList(todos_list.filter((e) => {

      // remove the todo as todoList is now getting updates by the values not containing todos
      return e !== todos;
    }));
  }


  const addToDo = (title, desc) => {
    // update sr No with the srNo of last object
    let srno = (todos_list.length === 0) ? 1 : todos_list[todos_list.length - 1].srNo + 1;
    const item = {
      srNo: srno,
      title: title,
      desc: desc
    }
    console.log(item);
    setList([...todos_list, item]);
    // console.log(title, " ", desc);


    // Add to the local storage
    // if (localStorage.getItem("item") === null) {
    //   localStorage.setItem("item", JSON.stringify(todos_list));
    // }
  }

  // useEffect function=> used to handle the side effects in React such as fetching data
  // & updating DOM
  // Syntax: useEffect(FUNCTION, DEPENDENCY)

  // renders everytime when there is any change in todos
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(todos_list));
  }, [todos_list]);

  return (
    <>

      {/* Wrap all app inside BrowserRouter: parent component holding all other components */}
      <BrowserRouter>

        {/* here passing args i.e props to Header component, title = "ToDo List" is a props*/}
        <Header title="ToDo List" searchBar={true} /> {/* returned a Boolean */}

        {/* holds the links of other locations */}
        <Routes>

          {/* route to different locations */}

          {/* Home, exact means will check all path "/" else will render /path to home itself */}
          <Route exact path="/" render={() => {
            return (
              <>
                <Add_todos addtodo={addToDo} />
                {/* ToDos list, passing ToDos as args/props to ToDo list component as {todos}*/}

                <Todos Todos_list={todos_list} onDelete={onDelete}></Todos>
              </>
            );
          }}>
          </Route>

          {/* About */}
          <Route exact path="/about">
            <About />
          </Route>

        </Routes>

        <Footer></Footer>
      </BrowserRouter >

    </>
  );
}

export default App;
