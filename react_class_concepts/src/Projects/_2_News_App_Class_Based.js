import React, { Component } from 'react'
import Navbar from "../Class_based_components/chapter1/Navbar2";
import News from "../Class_based_components/chapter1/News";
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class _2_News_App extends Component {
  pageSize = 9;

  apiKey = process.env.REACT_APP_API_KEY;
  state = {
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({
      progress: progress
    });
    // console.log(this.apiKey);
  }
  render() {
    return (
      <>
        <Router>
          {/* Navbar is all over the app */}
          <Navbar></Navbar>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={5}
          />

          {/* <News API_KEY={this.apiKey} setProgress={this.setProgress}  key="1" pageSize={5} category="general" color="primary" country="in"></News> */}

          {/* Contains all the child <Routes> & renders the exact match  */}
          <Routes>

            {/* Here component is same, so to force remount the same component  */}
            {/* Provide a unique key prop */}
            <Route exact path="/"
              element={<News API_KEY={this.apiKey} setProgress={this.setProgress}  key="0" pageSize={this.pageSize} category="general" color="danger" country="in"></News>}
            />
            <Route exact path="/business"
              element={<News API_KEY={this.apiKey} setProgress={this.setProgress}  key="1" pageSize={this.pageSize} category="business" color="light" country="in"></News>}
            />
            <Route exact path="/entertainment"
              element={<News API_KEY={this.apiKey} setProgress={this.setProgress}  key="2" pageSize={this.pageSize} category="entertainment" color="primary" country="in"></News>}
            />
            <Route exact path="/general"
              element={<News API_KEY={this.apiKey} setProgress={this.setProgress}  key="3" pageSize={this.pageSize} category="general" color="secondary" country="in"></News>}
            />
            <Route exact path="/health"
              element={<News API_KEY={this.apiKey} setProgress={this.setProgress}  key="4" pageSize={this.pageSize} category="health" color="success" country="in"></News>}
            />
            <Route exact path="/science"
              element={<News API_KEY={this.apiKey} setProgress={this.setProgress}  key="5" pageSize={this.pageSize} category="science" color="danger" country="in"></News>}
            />
            <Route exact path="/sports"
              element={<News API_KEY={this.apiKey} setProgress={this.setProgress}  key="6" pageSize={this.pageSize} category="sports" color="warning" country="in"></News>}
            />
            <Route exact path="/technology"
              element={<News API_KEY={this.apiKey} setProgress={this.setProgress}  key="7" pageSize={this.pageSize} category="technology" color="dark" country="in"></News>}
            />

          </Routes>
        </Router >
      </>
    )
  }
}

