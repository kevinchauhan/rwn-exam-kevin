import React from 'react'
import Product from './pages/Product'
import { Provider } from 'react-redux'
import store from './redux/store'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'

const Test3 = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Product />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default Test3