import './styles.css';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

function Breakfast() {
  const { pathname } = useLocation();

  return pathname === '/breakfast' ? (
    <div className='heading-section'>
      <h1>breakfast recipes</h1>
      <div className='grid-section'>
        <div>
          <NavLink to='/breakfast/muesli'>
            <img
              src={require('../images/apricot-hazelnut-muesli.webp')}
              alt='muesli'
            />
            <p>hazelnut-muesli</p>
          </NavLink>
        </div>
        <div>
          <NavLink to='/breakfast/toast'>
            <img
              src={require('../images/avocado-feta-toast.webp')}
              alt='breadtoast'
            />
            <p>avocado-feta-toast</p>
          </NavLink>
        </div>
        <div>
          <NavLink to='/breakfast/pancakes'>
            <img
              src={require('../images/nutty-pancakes.webp')}
              alt='nutty-pancakes'
            />
            <p>nutty-pancakes</p>
          </NavLink>
        </div>
        <div>
          <NavLink to='/breakfast/smoothie'>
            <img
              src={require('../images/sunshine-smoothie.webp')}
              alt='smoothie'
            />
            <p>sunshine-smoothie</p>
          </NavLink>
        </div>
        <div>
          <NavLink to='/breakfast/omelette'>
            <img src={require('../images/omelette.webp')} alt='omelette' />
            <p>omelette</p>
          </NavLink>
        </div>
      </div>
    </div>
  ) : (
    <Outlet />
  );
}

export default Breakfast;
