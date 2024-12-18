import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Add from './Home/Childs/Add';
import Search from './Home/Childs/Search';
import Id from './Home/Childs/Id';

const NestedComponents = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* define child routes under parent route */}
                {/* "/" is the parent url */}
                <Route path="/" element={<Home />} >
                    <Route path="add" element={<Add />} />
                    <Route path="search" element={<Search />} />
                    <Route path="id" element={<Id />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default NestedComponents;