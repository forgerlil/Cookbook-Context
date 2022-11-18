import { NavLink, Outlet, useLocation } from 'react-router-dom';

function Salads() {
  const { pathname } = useLocation();

  return pathname === '/salads' ? (
    <div className='heading-section'>
      <h1>Salad Recipes</h1>
      <div className='grid-section'>
        <div>
          <NavLink to='/salads/summer-salad'>
            <img
              src={require('../images/summer-salad.webp')}
              alt='summer-salad'
            />
            <p>Summer Salad</p>
          </NavLink>
        </div>
        <div>
          <NavLink to='/salads/chicken-satay-salad'>
            <img
              src={require('../images/chicken-satay-salad.webp')}
              alt='chicken-satay-salad'
            />
            <p>Chicken Satay Salad</p>
          </NavLink>{' '}
        </div>
        <div>
          <NavLink to='/salads/couscous-salad'>
            <img
              src={require('../images/couscous-salad.webp')}
              alt='couscous-salad'
            />
            <p>Couscous Salad</p>
          </NavLink>
        </div>
      </div>
    </div>
  ) : (
    <Outlet />
  );
}

export default Salads;
