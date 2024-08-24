import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateUser from "./components/CreateUser";
import Read from "./components/Read";
import Update from "./components/Update";
import SignupForm from "./components/SignUp";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<CreateUser />} />
          <Route path="/read" element={<Read />} />
          <Route path="/edit/:id" element={<Update />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
