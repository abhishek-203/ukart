import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Product from './Product'
import Contact from './Contact'
import Checkout from './Checkout'
import Testimonial from './Testimonial'
import Error from './Error'
import AdminHome from './Admin/AdminHome'
import Maincategory from './Admin/MainCategory/Maincategory'
import CreateMaincategory from './Admin/MainCategory/CreateMaincategory'
import UpdateMaincategory from './Admin/MainCategory/CreateMaincategory'


export default function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='/shop' element={<Shop/>} />
                <Route path='/product' element={<Product/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/testimonial' element={<Testimonial/>}/>
                <Route path='/contact' element={<Contact/>}/>

                <Route path='/admin' element={<AdminHome/>}/>
                <Route path='/admin/maincategory' element={<Maincategory/>}/>
                <Route path='/admin/maincategory/create' element={<CreateMaincategory/>}/>
                <Route path='/admin/maincategory/update/:id' element={<UpdateMaincategory/>}/>

                <Route path='/*' element={<Error/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
