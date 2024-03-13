import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navigation from './components/Navigations';

function App() {

  return (
    <Router>
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home/>} />
                {/* <Route path="/about" element={<AboutPage />} /> */}
                {/* Add routes for other pages */}
            </Routes>
        </div>
    </Router>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  
}

export default App;
