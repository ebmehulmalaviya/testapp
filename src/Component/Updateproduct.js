/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useEffect } from 'react';
import { getProductobj } from '../Redux/ProductAction'
import { useSelector, useDispatch } from 'react-redux';
import { updateProduct } from '../Redux/ProductAction'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";

function Updateproduct() {
    const navigate = useNavigate()
    const product = useSelector((state) => state.product.productobj)
    const { id } = useParams();
    const dispatch = useDispatch()
    const [name, Setname] = useState('')
    const [price, Setprice] = useState('')
    const [discription, Setdiscription] = useState('')
    const prodData = { name, price, discription }

    const updateProducts = (e) => {
        e.preventDefault();
        dispatch(updateProduct(prodData, product.id))
        navigate('/product')
    }

    useEffect(() => {
        dispatch(getProductobj(id))
    }, [])

    useEffect(() => {
        if (product) {
            Setname(product.name)
            Setprice(product.price)
            Setdiscription(product.discription)
        }
    }, [product])
    return (
        <div className='w-1/2 mx-auto mt-10'>
            <form onSubmit={updateProducts}>
                <div className='text-left'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Enter Car Name</label>
                        <input value={name || ''} onChange={(e) => Setname(e.target.value)} name='name' type="text" className="form-control" id="exampleFormControlInput1" placeholder="enter car name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Enter Prise</label>
                        <input value={price || ''} onChange={(e) => Setprice(e.target.value)} name='price' type="text" className="form-control" id="exampleFormControlInput1" placeholder="enter PriCe" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Discription</label>
                        <textarea value={discription || ''} onChange={(e) => Setdiscription(e.target.value)} name='Discription' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Update</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Updateproduct
