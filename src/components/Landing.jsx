import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div style={{
      height: '100vh',
      backgroundImage: 'url(https://via.placeholder.com/1200x800/228B22/FFFFFF?text=Plantas)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white'
    }}>
      <h1>Plantas Verdes</h1>
      <p>La mejor tienda de plantas para tu hogar</p>
      <Link to="/products">
        <button style={{padding: '1rem 2rem', fontSize: '1.2rem'}}>
          Comenzar
        </button>
      </Link>
    </div>
  );
}