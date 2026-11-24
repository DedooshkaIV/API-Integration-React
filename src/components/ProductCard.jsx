function ProductCard({ title, description, category, brand, price, rating, image, stock }) {
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

                </div>
            </div>
        </div>
    )
}

export default ProductCard