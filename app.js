import React from 'react';
import ReactDOM from 'react-dom/client';

import Front from './Source/Component/Front';
import Header from './Source/Component/Header';

import FirstSemester from './Source/Component/FirstSemester';
import SecondSemester from './Source/Component/SecondSemester';
import ThirdSemester from './Source/Component/ThirdSemester';   
import FourthSemester from './Source/Component/FourthSemester';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Front />} />
                <Route path="/first-semester" element={<FirstSemester />} />
                <Route path="/second-semester" element={<SecondSemester />} />
                <Route path="/third-semester" element={<ThirdSemester />} />
                <Route path="/fourth-semester" element={<FourthSemester />} />
            </Routes>
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);