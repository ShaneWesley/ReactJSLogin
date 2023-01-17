import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';

//  Pages
import Login from "./pages/login.js"
import SignUp from "./pages/sign-up"
import ForgotPassword from "./pages/forgot-password"

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
