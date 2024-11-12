// import logo from './logo.svg';
// import './App.css';

// React uses camelCase

let name = "Amit";
function App() {
  return (
    // diff. btn HTML and JSX: class="App-header" className="App-header"

    // Called as React JSX fragment (App says there should be only one element wrapped in open & closed braces <> </> )
    <>

      {/* This a comment */}

      {/* Add More elements now */}
      <nav>
        <li>Home</li>
        <li>Contact</li>
        <li>Services</li>
      </nav>

      <div className="App-header">

        {/* JSX is HTML with some changes
            e.g class = className
                for  = htmlFor
                As class & for are reserved keywords

            JSX represents Object
            "Babel" compiles JSX to React.createElement() calls

            e.g const ele = {
                  <h1 className="H1">
                        Hello
                  </h1>
                }

                To

                const ele = React.createElement(
                    type: "h1",
                    props: {
                        className: "H1",
                        forIndex: 0
                      }
                )
        */}

        {/* Anything inside curley braces is JVASCRIPT in React funciton based components */}
        <h1>Hello {name} </h1>
        Hello World
      </div>


    </>
  );
}