import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  Eye, 
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  PackageCheck,
  AlertTriangle,
  XCircle
} from 'lucide-react';

// Sample Mock Product Data
const initialProducts = [
  {
    id: 'PRD-001',
    name: 'Wireless Noise-Canceling Headphones',
    category: 'Electronics',
    price: 199.99,
    stock: 45,
    sales: 120,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 'PRD-002',
    name: 'Ergonomic Leather Gaming Chair',
    category: 'Furniture',
    price: 289.50,
    stock: 8,
    sales: 64,
    status: 'Low Stock',
    image: 'https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 'PRD-003',
    name: 'Mechanical RGB Gaming Keyboard',
    category: 'Electronics',
    price: 89.99,
    stock: 0,
    sales: 210,
    status: 'Out of Stock',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 'PRD-004',
    name: 'Minimalist Stainless Water Bottle',
    category: 'Accessories',
    price: 24.99,
    stock: 150,
    sales: 340,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 'PRD-005',
    name: 'Smart Fitness & Health Watch',
    category: 'Electronics',
    price: 149.00,
    stock: 4,
    sales: 95,
    status: 'Low Stock',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=120'
  }
];

export default function ProductList() {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Filter Logic
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || product.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Checkbox handlers
  const toggleSelectAll = () => {
    if (selectedProducts.length === filteredProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(filteredProducts.map(p => p.id));
    }
  };

  const toggleSelectOne = (id) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter(item => item !== id));
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  // Status Badge Colors Helper
  const getStatusBadge = (status) => {
    switch (status) {
      case 'In Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <PackageCheck size={13} />
            In Stock
          </span>
        );
      case 'Low Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <AlertTriangle size={13} />
            Low Stock
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <XCircle size={13} />
            Out of Stock
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Table Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search products by name or SKU..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-sm pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500"
          />
        </div>

        {/* Dropdown Filters & Actions */}
        <div className="flex items-center gap-3 flex-wrap">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-slate-300 text-sm px-3 py-2 rounded-xl focus:outline-none focus:border-indigo-500 cursor-pointer"
          >
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Accessories">Accessories</option>
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-slate-300 text-sm px-3 py-2 rounded-xl focus:outline-none focus:border-indigo-500 cursor-pointer"
          >
            <option value="All">All Statuses</option>
            <option value="In Stock">In Stock</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>

          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg shadow-indigo-600/20 transition-all">
            <Plus size={16} />
            Add Product
          </button>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            {/* Table Head */}
            <thead className="bg-slate-800/50 text-slate-400 font-medium border-b border-slate-800 text-xs uppercase tracking-wider">
              <tr>
                <th className="p-4 w-10">
                  <input
                    type="checkbox"
                    checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
                    onChange={toggleSelectAll}
                    className="rounded bg-slate-800 border-slate-700 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900 cursor-pointer"
                  />
                </th>
                <th className="p-4">Product</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Stock</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-800/60">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => {
                  const isSelected = selectedProducts.includes(product.id);
                  return (
                    <tr
                      key={product.id}
                      className={`hover:bg-slate-800/40 transition-colors ${
                        isSelected ? 'bg-indigo-950/20' : ''
                      }`}
                    >
                      <td className="p-4">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleSelectOne(product.id)}
                          className="rounded bg-slate-800 border-slate-700 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900 cursor-pointer"
                        />
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-11 h-11 rounded-lg object-cover bg-slate-800 border border-slate-700/60"
                          />
                          <div>
                            <p className="font-semibold text-white hover:text-indigo-400 transition-colors cursor-pointer">
                              {product.name}
                            </p>
                            <p className="text-xs text-slate-500">SKU: {product.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-slate-400">{product.category}</td>
                      <td className="p-4 font-medium text-white">
                        ₹{product.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </td>
                      <td className="p-4">
                        <span className="font-medium text-slate-200">{product.stock}</span>
                        <span className="text-xs text-slate-500 block">{product.sales} sold</span>
                      </td>
                      <td className="p-4">{getStatusBadge(product.status)}</td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors"
                            title="View Product"
                          >
                            <Eye size={16} />
                          </button>
                          <button 
                            className="p-1.5 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 rounded-lg transition-colors"
                            title="Edit Product"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button 
                            className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors"
                            title="Delete Product"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7" className="p-8 text-center text-slate-500">
                    No products found matching your search or filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="p-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            Showing <span className="text-white font-medium">{filteredProducts.length}</span> of{' '}
            <span className="text-white font-medium">{products.length}</span> products
          </p>

          <div className="flex items-center gap-2">
            <button
              disabled
              className="p-2 bg-slate-800 text-slate-500 rounded-lg disabled:opacity-50 cursor-not-allowed"
            >
              <ChevronLeft size={16} />
            </button>
            <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg font-medium">1</button>
            <button className="px-3 py-1.5 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded-lg font-medium transition-colors">
              2
            </button>
            <button className="p-2 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}