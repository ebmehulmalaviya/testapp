import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchProduct, DeleteProduct } from '../Redux/ProductAction';
import { Link } from 'react-router-dom';
import Childcomponents from './Childcomponents';
import Userlisting from './Userlisting'

function Product() {
    const product = useSelector((state) => state.product.productList)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchProduct())
    }, [])
    const handleremove = (id) => {
        dispatch(DeleteProduct(id))
        dispatch(FetchProduct())
    }

    return (
        <div className='card mt-4'>
            <div className='text-gray-700'>
                <h2>Product</h2>
                <Childcomponents >Childran</Childcomponents>
                {
                    product && product.map((item) => (
                        <div className='card w-1/3 py-6 my-6'>
                            <h5>{item.name}</h5>
                            <h5>{item.discription}</h5>
                            <h5>$ {item.price}</h5>
                            <div>
                                <button onClick={() => handleremove(item.id)} className='bg-red-500 text-white w-20 rounded-sm mx-2'>Del</button>
                                <Link to={`/updateProduct/${item.id}`} className='bg-gray-500 p-1 px-2 text-white w-20 rounded-sm'>update</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Product
