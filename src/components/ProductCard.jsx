import { useState } from 'react'

function ProductCard({ title, description, category, brand, price, rating, image, stock }) {

    const [cart, setCart] = useState(false)

    return (

        <div className="col-12 col-sm-6 col-lg-4">

            <div className="card shadow-sm h-100 rounded-4 overflow-hidden"
                style={{ backgroundColor: '#FFFDF8', border: '2px solid #D8C5EF' }}
            >

                <img
                    src={image}
                    className="card-img-top"
                    alt={title}
                    style={{ height: '220px', objectFit: 'contain', backgroundColor: '#FCE7F0' }}
                />

                <div className="card-body d-flex flex-column">

                    <div>

                        <span className="badge bg-secondary mb-2">
                            <i className="bi bi-tag-fill me-2"></i>
                            {category}
                        </span>

                    </div>

                    <h5 className="card-title fw-bold">
                        {title}
                    </h5>

                    <p className="text-muted">
                        {brand}
                    </p>

                    <p className="card-text">
                        {description}
                    </p>

                    <div className="mt-auto">

                        <p className="card-text">
                            <i className="bi bi-star-fill text-warning me-2"></i>
                            {rating} / 5
                        </p>

                        <h4 className="fw-bold" style={{ color: '#7545AD' }}>
                            ${price}
                        </h4>

                        <span className="badge bg-success">
                            <i className="bi bi-box-seam me-2"></i>
                            {stock} in stock
                        </span>

                    </div>

                    <div className="mt-3">
                        <button
                            className="btn w-100 fw-semibold"
                            style={{
                                backgroundColor: cart ? '#D8C5EF' : '#7545AD',
                                color: cart ? '#39265C' : '#FFFFFF'
                            }}
                            onClick={() => setCart(!cart)}
                        >
                            <i className={cart ? 'bi bi-cart-dash me-2' : 'bi bi-cart-plus me-2'}></i>
                            {cart ? 'Remove from Cart' : 'Add to Cart'}
                        </button>
                        
                        <div className="mt-2" style={{ height: '24px' }}>
                            {cart && (
                                <p className="text-success text-center mt-2 mb-0">
                                    Added to cart!
                                </p>
                            )}

                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductCard
