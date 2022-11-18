import './styles.css';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

function Breakfast() {
  const { pathname } = useLocation();

  return pathname === '/mainDishes' ? (
    <div className='heading-section'>
      <h1>main courses </h1>
      <div className='grid-section'>
        <div>
          <NavLink to='/mainDishes/Spaghetti'>
            <img src={require('../images/spaghetti.webp')} alt='spaghetti' />
            <p>hazelnut-muesli</p>
          </NavLink>
        </div>
        <div>
          <NavLink to='/mainDishes/lasagne'>
            <img src={require('../images/lasagne.webp')} alt='lasagne' />
            <p>avocado-feta-toast</p>
          </NavLink>
        </div>

        <div>
          <NavLink to='/mainDishes/stroganoff'>
            <img
              src={require('../images/beef-stroganoff.webp')}
              alt='smoothie'
            />
            <p>sunshine-smoothie</p>
          </NavLink>
        </div>
      </div>
    </div>
  ) : (
    <Outlet />
  );
}

export default Breakfast;
