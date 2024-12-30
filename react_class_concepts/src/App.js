import React, { useState } from 'react';

// 1st app is Text Utils
// import TextUtils from "./Projects/_1_TextUtilsApp";

// 2nd project is news app
// import NewsApp from "./Projects/_2_News_App_Class_Based";
import NewsApp2 from "./Projects/_2_News_App_Function_Based";

export default function App() {

    return (
        <>
            {/* 1st app */}
            {/* <TextUtils></TextUtils> */}

            {/* 2nd App */}
            <NewsApp2></NewsApp2>
        </>
    );
}