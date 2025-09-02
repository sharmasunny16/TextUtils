import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form1 from './components/Form1';
import Alert from './components/Alert';
import About from './components/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  const toggleGreen26 = () => {
    if (mode === 'light') {
      setMode('green');
      document.body.style.backgroundColor = '#5E936C';
      showAlert('Green mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  // Router setup
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar mode={mode} togglemode={toggleMode} togglegreen26={toggleGreen26} />
          <Alert alert={alert} />
          <div className="container my-3">
            <Form1 showAlert={showAlert} heading="Enter the text" mode={mode} />
          </div>
        </>
      ),
    },
    {
      path: '/about',
      element: (
        <>
          <Navbar mode={mode} togglemode={toggleMode} togglegreen26={toggleGreen26} />
          <Alert alert={alert} />
          <About />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
