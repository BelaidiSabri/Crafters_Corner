import logo from './logo.svg';
import './App.css';
import Signup from './pages/signup/signup';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/profile/:username' element={<Profile></Profile>}></Route>
     </Routes>
    </div>
  );
}

export default App;
