import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';

//  Pages
import Login from "./Pages/Login/Login.js"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
