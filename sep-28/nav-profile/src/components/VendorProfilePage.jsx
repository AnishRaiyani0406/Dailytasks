import React, { useState } from 'react';

export default function VendorProfilePage() {
  
  const [vendorData, setVendorData] = useState({
    fullName: 'Rajesh Sharma',
    email: 'rajesh.sharma@greenharvest.in',
    phone: '+91 98765 43210',
    storeName: 'Green Harvest Fresh Produce',
    storeCategory: 'Fresh Organic Produce',
    address: 'Shop No. 12, APMC Market, Kalupur , Ahmedabad, Gujarat - 380001',
    taxId: '27AABCG1234H1ZT', // GSTIN
    licenseNumber: '11521001000456', // FSSAI License
    bankName: 'State Bank of India',
    accountNumber: '30912345678',
    ifscCode: 'SBIN0001234',
  });

  const [isSaved, setIsSaved] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendorData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          
       
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold mb-1">Vendor Profile Settings</h2>
              <p className="text-muted mb-0">Update your store information and account details.</p>
            </div>
            <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 rounded-pill fs-7">
              Active Vendor
            </span>
          </div>

          
          {isSaved && (
            <div className="alert alert-success alert-dismissible fade show mb-4" role="alert">
              <strong>Success!</strong> Vendor profile updated successfully.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-header bg-white py-3 border-bottom">
                <h5 className="card-title fw-bold m-0 text-success">
                  👤 Personal & Store Information
                </h5>
              </div>
              <div className="card-body p-4">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      value={vendorData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={vendorData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={vendorData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Store / Business Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="storeName"
                      value={vendorData.storeName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Store Category</label>
                    <select
                      className="form-select"
                      name="storeCategory"
                      value={vendorData.storeCategory}
                      onChange={handleChange}
                    >
                      <option value="Fresh Organic Produce">Fresh Organic Produce</option>
                      <option value="Dairy & Milk Products">Dairy & Milk Products</option>
                      <option value="Bakery & Confectionery">Bakery & Confectionery</option>
                      <option value="General Grocery">General Grocery</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Business Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={vendorData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

           
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-header bg-white py-3 border-bottom">
                <h5 className="card-title fw-bold m-0 text-success">
                  🏦 Legal & Banking Details
                </h5>
              </div>
              <div className="card-body p-4">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Tax ID / Identity Document</label>
                    <input
                      type="text"
                      className="form-control"
                      name="taxId"
                      value={vendorData.taxId}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">License Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="licenseNumber"
                      value={vendorData.licenseNumber}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Bank Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="bankName"
                      value={vendorData.bankName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Account / IBAN Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="accountNumber"
                      value={vendorData.accountNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            
            <div className="d-flex justify-content-end gap-3 mb-5">
              <button
                type="button"
                className="btn btn-outline-secondary px-4"
                onClick={() =>
                  setVendorData({
                    fullName: '',
                    email: '',
                    phone: '',
                    storeName: '',
                    storeCategory: 'Fresh Organic Produce',
                    address: '',
                    taxId: '',
                    licenseNumber: '',
                    bankName: '',
                    accountNumber: '',
                  })
                }
              >
                Clear All
              </button>
              <button type="submit" className="btn btn-success px-5 fw-bold">
                Save Profile
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}