import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Navbar';
import VendorProfilePage from './components/VendorProfilePage';

function App() {
  return (
    <div className="min-vh-100 bg-light">
      
      <Navbar />

    
      <main>
        <VendorProfilePage />
      </main>
    </div>
  );
}

export default App;