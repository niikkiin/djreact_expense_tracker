import React from 'react';
import './App.css';

// components
import Sidebar from './components/sidebar/sidebar.component';

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <div className="main-container">
        main content
      </div>
    </div>
  );
}

export default App;
