

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm py-3">
      <div className="container">
        
        <a className="navbar-brand fw-bold text-success fs-4 me-lg-5" href="#">
          🌱 GreenGrocer
        </a>

       
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-medium gap-3 gap-lg-4">
            <li className="nav-item">
              <a className="nav-link active text-success" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                Deals
              </a>
            </li>
          </ul>

         
          <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">
            <input
              className="form-control bg-light border-0 rounded-pill px-3 py-2"
              type="search"
              placeholder="Search grocery..."
              style={{ width: '220px' }}
            />
            <button className="btn btn-success rounded-pill px-3 py-2 fw-semibold d-flex align-items-center gap-1" type="button">
              <span>🛒</span> Cart (0)
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}