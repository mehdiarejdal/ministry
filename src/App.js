import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Dews from './Dews/Dews';
import StudentList2 from './StudentList2/StudentList2';
import DataAnalysis from './DataAnalysis/DataAnalysis';
import Atrsik from './Atrisk/Atrisk';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dews />} />
                    <Route path="/dataanalysis" element={<DataAnalysis />} />
                    <Route path="/studentlist" element={<StudentList2 />} />
                    <Route path="/atrisk" element={<Atrsik />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
