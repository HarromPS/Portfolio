import React, { useState } from 'react'
import Navbar from "../Class_To_Function_Based/chapter1/Navbar2";
import News from "../Class_To_Function_Based/chapter1/News";
import LoadingBar from 'react-top-loading-bar';

import {
    BrowserRouter as Router, Routes, Route
} from "react-router-dom";

const _2_News_App = () => {
    const pageSize = 9;
    const apiKey = process.env.REACT_APP_API_KEY;
    const [progress, setProg] = useState(0)

    const setProgress = (progress) => {
        setProg(progress);
    }
    return (
        <>
            <Router>
                {/* Navbar is all over the app */}
                <Navbar></Navbar>
                <LoadingBar
                    color='#f11946'
                    progress={progress}
                    height={5}
                />
                <Routes>

                    {/* Here component is same, so to force remount the same component  */}
                    {/* Provide a unique key prop */}
                    <Route exact path="/"
                        element={<News API_KEY={apiKey} setProgress={setProgress} key="0" pageSize={pageSize} category="general" color="danger" country="in"></News>}
                    />
                    <Route exact path="/business"
                        element={<News API_KEY={apiKey} setProgress={setProgress} key="1" pageSize={pageSize} category="business" color="light" country="in"></News>}
                    />
                    <Route exact path="/entertainment"
                        element={<News API_KEY={apiKey} setProgress={setProgress} key="2" pageSize={pageSize} category="entertainment" color="primary" country="in"></News>}
                    />
                    <Route exact path="/general"
                        element={<News API_KEY={apiKey} setProgress={setProgress} key="3" pageSize={pageSize} category="general" color="secondary" country="in"></News>}
                    />
                    <Route exact path="/health"
                        element={<News API_KEY={apiKey} setProgress={setProgress} key="4" pageSize={pageSize} category="health" color="success" country="in"></News>}
                    />
                    <Route exact path="/science"
                        element={<News API_KEY={apiKey} setProgress={setProgress} key="5" pageSize={pageSize} category="science" color="danger" country="in"></News>}
                    />
                    <Route exact path="/sports"
                        element={<News API_KEY={apiKey} setProgress={setProgress} key="6" pageSize={pageSize} category="sports" color="warning" country="in"></News>}
                    />
                    <Route exact path="/technology"
                        element={<News API_KEY={apiKey} setProgress={setProgress} key="7" pageSize={pageSize} category="technology" color="dark" country="in"></News>}
                    />

                </Routes>
            </Router >
        </>
    )
}

export default _2_News_App;