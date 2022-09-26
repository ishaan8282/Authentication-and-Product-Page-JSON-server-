
import {Routes,Route} from "react-router-dom";

import React from 'react'
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import LogIn from "../Pages/LogIn";
import Product from "../Pages/Product";
import SingleProduct from "../Pages/SingleProduct"
import NotFound from "../Pages/NotFound";
import PrivateRoute from "../Components/PrivateRoute"

function AllRoutes() {
  return (
    <Routes>

<Route path="/" element={
    
    <PrivateRoute>
        <Home/>
   </PrivateRoute>

}> </Route>

<Route path="/contact" element={<Contact/>}></Route>

<Route path="/about" element={<About/>}></Route>

<Route path="/login" element={<LogIn/>}></Route>

<Route path="/product" element={
<PrivateRoute><Product/></PrivateRoute>
}></Route>

<Route path="/product/:id" element={ 
<PrivateRoute> 
    <SingleProduct/> 
</PrivateRoute> 
 }></Route>


<Route path="*" element={<NotFound/>}></Route>
</Routes>
  )
}

export default AllRoutes