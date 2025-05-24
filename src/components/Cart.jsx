import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeItem } from '../redux/store';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function Cart() {
  const { items, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  return (
    <div>
      <Header />
      <div style={{padding: '2rem'}}>
        <h1>Carrito de Compras</h1>
        <p>Total plantas: {total}</p>
        <p>Coste total: ${totalPrice}</p>
        
        {items.length === 0 ? (
          <p>Carrito vacío</p>
        ) : (
          items.map(item => (
            <div key={item.id} style={{display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: '1px solid #ccc', margin: '1rem 0'}}>
              <img src={item.image} alt={item.name} style={{width: '100px', height: '100px'}} />
              <div>
                <h3>{item.name}</h3>
                <p>Precio: ${item.price}</p>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <button onClick={() => dispatch(decrement(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increment(item.id))}>+</button>
              </div>
              <button onClick={() => dispatch(removeItem(item.id))}>Eliminar</button>
            </div>
          ))
        )}
        
        <div style={{marginTop: '2rem'}}>
          <button style={{marginRight: '1rem'}}>Próximamente - Pago</button>
          <Link to="/products">
            <button>Continuar Comprando</button>
          </Link>
        </div>
      </div>
    </div>
  );
}