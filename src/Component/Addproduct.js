/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProducts } from '../Redux/ProductAction'
import { useNavigate } from 'react-router-dom'
function Addproduct() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, Setname] = useState()
    const [price, Setprice] = useState()
    const [discription, Setdiscription] = useState()
    const prodData = { name, price, discription }
    const addProduct = (e) => {
        e.preventDefault();
        dispatch(addProducts(prodData))
        navigate('/product')
        console.log("prod data", prodData);
    }
    return (
        <div className='w-1/2 mx-auto mt-10'>
            <form onSubmit={addProduct}>
                <div className='text-left'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Enter Car Name</label>
                        <input onChange={(e) => Setname(e.target.value)} name='name' type="text" className="form-control" id="exampleFormControlInput1" placeholder="enter car name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Enter Prise</label>
                        <input onChange={(e) => Setprice(e.target.value)} name='price' type="text" className="form-control" id="exampleFormControlInput1" placeholder="enter PriCe" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Discription</label>
                        <textarea onChange={(e) => Setdiscription(e.target.value)} name='Discription' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Addproduct
