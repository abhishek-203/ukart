import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function AdminHome() {
  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Admin Home</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><Link to="/" className='text-light'>Home</Link></li>
          <li className="breadcrumb-item active text-white">Admin Home</li>
        </ol>
      </div>
      {/* <!-- Single Page Header End --> */}
      <div className="container-fluid my-3" >
        <div className="row">
          <div className="col-md-3">
                <Sidebar/>
          </div>
          <div className="col-md-9">
            <h5 className="bg-primary text-center text-light p-2">Admin Home</h5>
              <div className="row">
                <div className="col-md-6">
                  <img src="/img/avatar1.jpg" height="380px" width="100%" alt="" />
                </div>
                <div className="col-md-6">
                  <table className='table table-hover table-bordered text-dark'>
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <td>Abhishek Tiwari</td>
                      </tr>
                      <tr>
                        <th>UserName</th>
                        <td>admin</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>abhi2032001@gmail.com</td>
                      </tr>
                      <tr>
                        <th>Phone</th>
                        <td>9318387104</td>
                      </tr>
                      <tr>
                        <td colSpan={2}><Link to="/update-profile" className='btn btn-primary text-light w-100 '>Update Profile</Link></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
