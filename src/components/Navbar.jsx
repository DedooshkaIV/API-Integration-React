import logo from '../assets/storeLogo.png'

function Navbar() {
    return (
        <nav className="navbar navbar-dark shadow-sm"
            style={{
                backgroundColor: '#39265C',
                borderBottom: '4px solid #F7B5D2'
            }}
        >

            <div className="container">

                <span className="navbar-brand d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Product Store Logo"
                        width="80"
                        height="80"
                        className="me-3"
                        style={{ objectFit: 'contain' }}
                    />

                    <span className="mt-2">
                        <span style={{ color: '#FFD166' }}>Product</span>
                        <span style={{ color: '#67DFF5' }}>Catalog</span>
                    </span>

                </span>

                <span className="text-white mt-2">
                    React API Integration
                </span>

            </div>
        </nav>
    )
}

export default Navbar