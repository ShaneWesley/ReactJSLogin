import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';

//  Pages
import Login from "./Pages/Login.js"
import SignUp from "./Pages/SignUp.js"
import ForgotPassword from "./Pages/ForgotPassword.js"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
