import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import QuestionCard from './components/QuestionCard';
import UserForm from './components/UserForm';
import JavaScript from './components/JavaScript';
import Java from './components/Java';

import Reactjs from './components/Reactjs';
import ReportCard from './components/ReportCard';

function App() {

  const startTrivia=async () => {
    
  }
  const checkAnswers=async (e: React.MouseEvent<HTMLButtonElement>) => {
    
  }
  const nextQuestion=async (e: React.MouseEvent<HTMLButtonElement>) => {
    
  }
  return (
    <div className="App">
      <h3>QUIZ APP</h3>
      <Router>
        <Routes>
              <Route path='/' element={<UserForm/>} /> 
              <Route path='/Javascript' element={<JavaScript/>} />
              <Route path='/Java' element={<Java/>} />
              <Route path='/Reactjs' element={<Reactjs/>} />
              <Route path='/ReportCard' element={<ReportCard   />} />
        </Routes> 
      </Router>
      
    </div>
  );
}

export default App;
