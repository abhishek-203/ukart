import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <div className="list-group">
                <Link to="/admin" className="list-group-item list-group-item-action active" aria-current="true">
                    <i className='fs-5 fa fa-home'></i><span className='float-end'>Home</span>
                </Link>
                <Link to="/admin/users" className="list-group-item list-group-item-action"><i className='text-success fs-5 fa fa-users'></i><span className='float-end'>Users</span></Link>
                <Link to="/admin/maincategory" className="list-group-item list-group-item-action"><i className='text-success fs-5 fa fa-list'></i><span className='float-end'>Main Category</span></Link>
                <Link to="/admin/subcategory" className="list-group-item list-group-item-action"><i className='text-success fs-5 fa fa-list'></i><span className='float-end'>Sub Category</span></Link>
                <Link to="/admin/brand" className="list-group-item list-group-item-action"><i className='text-success fs-5 fa fa-list'></i><span className='float-end'>Brand</span></Link>
                <Link to="/admin/products" className="list-group-item list-group-item-action"><i className='text-success fs-5 fa fa-list'></i><span className='float-end'>Products</span></Link>
                <Link to="/admin/testimonial" className="list-group-item list-group-item-action"><i className='text-success fs-5 fa fa-star'></i><span className='float-end'>Testimonials</span></Link>
                <Link to="/admin/checkout" className="list-group-item list-group-item-action"><i className='text-success fs-5 fa fa-shopping-bag'></i><span className='float-end'>Checkout</span></Link>
                <Link to="/admin/contactus" className="list-group-item list-group-item-action"><i className='text-success fs-5 fa fa-phone'></i><span className='float-end'>ContactUs</span></Link>
                <Link to="/admin/newslatters" className="list-group-item list-group-item-action"><i className='text-success fs-5 fa fa-envelope'></i><span className='float-end'>Newslatters</span></Link>
            </div>
        </>
        
    )
}
