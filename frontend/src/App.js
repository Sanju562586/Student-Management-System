// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import StudentList from './pages/StudentList';
import AddStudent from './pages/AddStudent';
import EditStudentForm from './pages/EditStudent';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list-students" element={<StudentList />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/edit-student" element={<EditStudentForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
