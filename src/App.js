import './App.css';
import ProductForm from './components/Home page/Admin';
import Home from './components/Home page/Home';
import Login from './components/Login/Login';
import Cart from './components/cart/Cart';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ProductDetails from './components/singleView/ProductDetails';

function App() {
  const jwtToken = localStorage.getItem("jwtToken");
  const isAuthenticated = jwtToken !== null;
  console.log(isAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path='/Home' element={<Home />} />
            {/* <Route path='*' element={<Login />} /> */}
            <Route path='/admin' element={<ProductForm />} />
            <Route path='/cart' element={<Cart />} />
            {/* Add a default route for unmatched paths */}
          </>
        ) : (
          <>
            <Route path='/singleview' element={<ProductDetails/>}/>
            <Route path='*' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Home' element={<Home />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
