import './App.css';
import Home from './components/Home';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/HomePage' element={< Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
