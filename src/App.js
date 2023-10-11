import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import LandingPage from './Landingpage';
import Login from './Login';
import Menu from './Menu';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <> 
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Menu" element={<Menu/>} />
    </Routes>
    </Router>
    {/* <Menu/> */}
    </>   
  );
}

export default App;
