import './App.css';
import Home from './components/Home page/Home';
import Imagesrc from './components/Home page/upload';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/HomePage' element={< Home />} />
    <Route path='/Img' element={< Imagesrc />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
