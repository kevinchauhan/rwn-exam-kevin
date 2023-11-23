import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Product = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(state)
    const addCart = (id) => {
        dispatch({ type: 'add_cart', payload: id })
    }

    return (
        <div className='container py-5'>
            <div className="grid grid-cols-4 gap-5">
                {
                    state.products.map((product, i) => {
                        return <div className='bg-white rounded-lg py-3 shadow'>
                            <div className='p-5'>
                                <img src={product.image} alt="" width={'100%'} className='h-72' />
                            </div>
                            <div className='p-3'>
                                <h2 className='text-xl line-clamp-1'>{product.title}</h2>
                                <p className='text-sm text-gray-400 line-clamp-2 mt-1'>{product.description}</p>
                                <p className='text-xl text-gray-800 font-medium line-clamp-2 mt-1'>₹ {product.price}</p>
                                <button className='bg-blue-900 text-gray-200 px-2 rounded py-1 mt-2 hover:bg-blue-800 transition' onClick={() => addCart(i)}>Add To Cart</button>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default Product