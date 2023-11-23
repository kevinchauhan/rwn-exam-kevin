import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Header = () => {
    const cartCount = useSelector(state => state.cart.length)
    return (
        <header className='shadow bg-violet-500'>
            <div className="container flex justify-between py-3 text-xl">
                <div className="logo font-medium"><Link to={'/'}>LOGO</Link></div>
                <div className="menu">
                    <ul className='flex gap-3'>
                        <li className='hover:text-gray-200 text-gray-900'><Link to="/">Products</Link></li>
                        <li className='hover:text-gray-200 text-gray-900'><Link to="/cart">Cart({cartCount})</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header