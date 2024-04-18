import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Dews from './Dews/Dews';
import StudentList2 from './StudentList2/StudentList2';
import DataAnalysis from './DataAnalysis/DataAnalysis';
import Atrsik from './Atrisk/Atrisk';
import Dashboard from "./dashboard/Dashboard"
import ChooseModel from "./ChooseModel/Dews"
import SearchBanner from "./ChooseModel/SearchBanner/SearchBanner"
// import login from "./Login"
import SignInSide from "./sign-in-side/SignInSide"

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<SignInSide />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dews" element={<Dews />} />
                    <Route path="/dataanalysis" element={<DataAnalysis />} />
                    <Route path="/studentlist" element={<StudentList2 />} />
                    <Route path="/atrisk" element={<Atrsik />} />
                    <Route path="/ChooseModel" element={<ChooseModel />} />
                    <Route path="/SearchBanner" element={<SearchBanner />} />

                </Routes>
            </div>
        </Router>
    );
};

export default App;
