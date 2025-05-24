import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/store';
import { plants } from '../data';
import Header from './Header';

export default function Products() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  
  const isInCart = (id) => cartItems.some(item => item.id === id);
  
  const categories = ['Hojas', 'Suculentas', 'Flores'];
  
  return (
    <div>
      <Header />
      <div style={{padding: '2rem'}}>
        {categories.map(category => (
          <div key={category}>
            <h2>{category}</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem'}}>
              {plants.filter(plant => plant.category === category).map(plant => (
                <div key={plant.id} style={{border: '1px solid #ccc', padding: '1rem', textAlign: 'center'}}>
                  <img src={plant.image} alt={plant.name} style={{width: '100%', height: '150px'}} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button 
                    onClick={() => dispatch(addItem(plant))}
                    disabled={isInCart(plant.id)}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: isInCart(plant.id) ? '#ccc' : '#4CAF50',
                      color: 'white',
                      border: 'none'
                    }}
                  >
                    {isInCart(plant.id) ? 'Añadido' : 'Añadir a la cesta'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}