import React, { useState } from 'react'
import Card from './Card'
import data from './ProductData'

const FilterProducts = () => {
    const [products, setProducts] = useState(data)

    const handleSearch = (e) => {
        const search = e.target.value
        if (search) {
            const filteredProducts = products.filter(product => {
                const title = product.title.toUpperCase()
                if (title.includes(search.toUpperCase())) {
                    console.log(search)
                    return product
                }
            })
            setProducts(filteredProducts)
        } else {
            setProducts(data)
        }
    }

    return (
        <>
            <section className='product-list'>
                <div className="container py-40 px-0">
                    <div className='search'>
                        <label htmlFor="">Search Item : </label>
                        <input type="text" placeholder='type anything...' onKeyUp={(e) => handleSearch(e)} />
                    </div>
                    <h1 style={{ marginBottom: "20px", padding: '0 12px' }}>Product List</h1>
                    <div className="row">
                        {products.map(product => {
                            return <Card data={product} key={product.id} />
                        })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default FilterProducts
