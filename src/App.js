import './App.css';
import Home from './components/Home page/Home';
import ProductForm from './components/Home page/Product';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/HomePage' element={< Home />} />
    <Route path='/Img' element={< ProductForm />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
