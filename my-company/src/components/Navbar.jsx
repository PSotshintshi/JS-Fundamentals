import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '20px' }}>About</Link>
      <Link to="/services" style={{ marginRight: '20px' }}>Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
