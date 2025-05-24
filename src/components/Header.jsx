import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const total = useSelector(state => state.cart.total);
  
  return (
    <header style={{padding: '1rem', borderBottom: '1px solid #ccc'}}>
      <nav style={{display: 'flex', gap: '1rem'}}>
        <Link to="/">Inicio</Link>
        <Link to="/products">Productos</Link>
        <Link to="/cart">🛒 ({total})</Link>
      </nav>
    </header>
  );
}