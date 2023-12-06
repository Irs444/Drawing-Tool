
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './components/Signup';

import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Board from './components/Board';

function App() {
  return (
   <BrowserRouter>
   {/* <Navbar /> */}
   <Routes>
    

    <Route path='/home' element={<Home/>}/>
    <Route path='/' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    
    
    <Route path='/whiteboard' element={<Board/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
