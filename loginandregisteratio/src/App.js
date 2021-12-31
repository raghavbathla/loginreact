import logo from './logo.svg';
import './App.css';
import RegForm from './components/RegForm'
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes, Redirect , Route
}from "react-router-dom";
function App() {
  return (
    <div >
      <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/signup" element={<RegForm/>}></Route>
      </Routes>
      </Router>
  
    </div>
  );
}

export default App;
