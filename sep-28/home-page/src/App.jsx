import React from 'react';
import HomePage from './HomePage'; // Make sure the path matches where you saved HomePage.jsx

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Paginated Home Page */}
      <HomePage />
    </div>
  );
}

export default App;