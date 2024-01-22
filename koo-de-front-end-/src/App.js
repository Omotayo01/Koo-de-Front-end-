import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from './LandingPage/Component/LandingPage';
import { Login } from './LogIn/Component/login';
import { Register } from './RealRegister/Component/Register';
import { Dashboard } from './DashBoard/component/Dashboard.jsx';
function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
          <Route path="/Dashboard" element={< Dashboard />} />
          <Route  path="/Register" element={< Register/>}/>
            <Route  path="/LogIn" element={<Login/>}/>
            <Route path="/" element={<LandingPage/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
