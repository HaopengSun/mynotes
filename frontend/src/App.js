import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import React, { Fragment } from 'react';
import Login from './features/Login'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Fragment>
        <AuthProvider>
          <Header/>
          <Routes>
            <Route component={Login} path="/login"/>  
          </Routes>
          </AuthProvider>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;