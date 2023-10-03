import './App.css';
import Cart from './components/cart/Cart';
import Home from './components/home page/Home';
import ProductForm from './components/home page/Product';
import Login from './components/login/Login';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const jwtToken = localStorage.getItem("jwtToken");
  const isAuthenticated = jwtToken !== null;
  console.log(isAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path='/homePage' element={<Home />} />
            {/* <Route path='*' element={<Login />} /> */}
            <Route path='/admin' element={<ProductForm />} />
            <Route path='/cart' element={<Cart />} />
            {/* Add a default route for unmatched paths */}
          </>
        ) : (
          <>
            <Route path='*' element={<Login />} />
            <Route path='/' element={<Login />} />
            <Route path='/homePage' element={<Home />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
