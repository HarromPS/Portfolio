import './App.css';
import { Home } from "./Components/Home";
import { Login } from './Components/Login';
import { SignUp } from './Components/SignUp';
import { About } from "./Components/About";
import { Users } from "./Components/Users";
import { Navbar } from "./Components/Navbar";
import { Alerts } from "./Components/Alerts";
// import { NoMatchRoute } from './Components/NoMatchRoute';
import NoteState from "./Context/Notes/NoteState";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  // Wrap all the childrens under NoteState
  return (
    <>
      <NoteState>
        <Router>

          <Navbar></Navbar>
          <Alerts tag="Hello" message="iNoteBook Notes On Cloud" />

          <div className="container">
            <Routes>
              <Route exact path={"/"}element={<Home></Home>}></Route>
            </Routes>

            <Routes>
              <Route exact path={"/about"} element={<About></About>}></Route>
            </Routes>

            <Routes>
              <Route exact path={"/user"} element={<Users></Users>}></Route>
            </Routes>

            <Routes>
              <Route exact path={"/login"} element={<Login></Login>}></Route>
            </Routes>

            <Routes>
              <Route exact path={"/signup"} element={<SignUp></SignUp>}></Route>
            </Routes>

            {/* <Routes>
              <Route exact path={"*"} element={<NoMatchRoute/>}></Route>
            </Routes> */}

          </div>

        </Router>

      </NoteState>
    </>
  );
}

export default App;
