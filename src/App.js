import './App.css';
import React, { useState, useEffect } from "react";
import axiosInstance from "../src/axios";
import StartApp from '../src/components/application/startPage/startPage';
import Application from '../src/components/application/application';

function App() {


  const [mounted, setMounted] = useState(false);
  const [dataUsers, setDataUsers] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState('');

  const userEmail = localStorage.getItem('authenticated_email');
  if (!mounted) {

    axiosInstance.get('users/').then((res) => {
      setIsAuthenticated(true);
      setDataUsers(res.data);
    }).catch((error) => {
      if (error.response.status === 401) {
        console.log(error.response.data);
      }
      console.log(error.response);
    });
  }

  useEffect(() => {
    setMounted(true)
  }, [])


  return (

    <div className="App">

      {isAuthenticated ? <div>
        <Application dataUsers={dataUsers} userEmail={userEmail} />
      </div> :
        <StartApp />}

    </div>
  );
}

export default App;
