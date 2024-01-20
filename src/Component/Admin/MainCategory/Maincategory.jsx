import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMaincategory, getMaincategory } from '../../../Store/ActionCreators/MaincategoryActionCreator'

export default function Maincategory() {
  let [data, setData] = useState([])
  let dispatch = useDispatch([])
  let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData)
  async function deleteItem(id) {
    dispatch(deleteMaincategory({ id: id }))
    getAPIData()
  }
  async function getAPIData() { 
    dispatch(getMaincategory())
    if (MaincategoryStateData.length)
      setData(MaincategoryStateData.slice(1).reverse())
  }
  useEffect(() => {
    getAPIData()
  }, [MaincategoryStateData.length])
  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Admin</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><Link to="/" className='text-light'>Home</Link></li>
          <li className="breadcrumb-item active text-white">Main Category</li>
        </ol>
      </div>
      {/* <!-- Single Page Header End --> */}
      <div className="container-fluid my-3" >
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className="bg-primary text-center text-light p-2">Main Category <Link to="/admin/maincategory/create"><i className='fa fa-plus text-light float-end'></i></Link></h5>
            <table className='table table-bordered text-dark'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td><Link to={`/admin/maincategory/update/${item.id}`}><i className='fa fa-edit'></i></Link></td>
                    <td><button className='btn text-danger' onClick={() => deleteItem(item.id)}><i className='fa fa-trash'></i></button></td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
