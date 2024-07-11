import React from 'react';
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute';
import AllProducts from '../Pages/AllProducts';
import Cart from '../Pages/Cart';
import Home from '../Pages/Home';
import SingleProduct from '../Pages/SingleProduct';



function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/allproducts/:products' element={<AllProducts/>} />
            <Route path='/cart' element={
              <PrivateRoute>
                <Cart/>
              </PrivateRoute>
              } />
            <Route path='/allproducts/:products/:id' element={
              <SingleProduct/>
            } />
            <Route path='/account/' element={
              <PrivateRoute>
              </PrivateRoute>
            } />
        </Routes>
    </>
    
  )
}

export default AllRoutes