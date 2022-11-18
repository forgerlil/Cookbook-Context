import { NavLink, Outlet, useLocation } from 'react-router-dom';

function Desserts() {
  const { pathname } = useLocation();

  return pathname === '/desserts' ? (
    <div className='heading-section'>
      <h1>Desserts</h1>
      <div className='grid-section'>
        <div>
          <NavLink to='/desserts/strawberry-mousse'>
            <img
              src={require('../images/Strawberry-mousse.webp')}
              alt='strawberry-mousse'
            />
            <p>Strawberry mousse</p>
          </NavLink>
        </div>
        <div>
          <NavLink to='/desserts/tiramisu'>
            <img src={require('../images/tiramisu.webp')} alt='tiramisu' />
            <p>Tiramisu</p>
          </NavLink>
        </div>
      </div>
    </div>
  ) : (
    <Outlet />
  );
}

export default Desserts;
