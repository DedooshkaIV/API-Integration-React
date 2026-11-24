import { useState, useEffect } from 'react'
import { getProducts } from '../services/productService'
import ProductCard from '../components/ProductCard'

function Products() {

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState('')

    useEffect(() => {

        async function loadProducts() {

            try {
                setLoading(true)
                setError('')

                const data = await getProducts()

                setProducts(data.products)

            } catch (err) {

                setError(err.message)

            } finally {
                setLoading(false)

            }
            
        }

        loadProducts()

    }, [])

    return (

        <div className="container py-5">

            <div className="text-center mb-5">

                <h1 className="fw-bold">
                    Browse Products
                </h1>

                <p className="text-muted">
                    Discover products from our collection
                </p>

            </div>

            {loading && (
                <div className="text-center py-5">

                    <div
                        className="spinner-border text-primary"
                        role="status">

                        <span className="visually-hidden">
                            Loading...
                        </span>

                    </div>

                    <p className="mt-3">
                        Fetching product information...
                    </p>

                </div>
            )}

            {error && (
                <div className="alert alert-danger text-center">

                    <i className="bi bi-exclamation-circle-fill me-2"></i>
                    {error}

                </div>
            )}

            {!loading && !error && (

                <div className="row g-4">

                    {products.map((product) => (

                        <ProductCard
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            category={product.category}
                            brand={product.brand}
                            price={product.price}
                            rating={product.rating}
                            image={product.thumbnail}
                            stock={product.stock}
                        />

                    ))}

                </div>

            )}

        </div>

    )
}

export default Products