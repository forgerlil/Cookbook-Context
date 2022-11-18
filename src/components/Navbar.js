import { NavLink } from 'react-router-dom';
import './styles.css';

function Navbar() {
  return (
    <div className='Navbar'>
      <div>
        <ul className='links-section'>
          <li>
            <NavLink className='left-link' to='/home'>
              Home
            </NavLink>
          </li>
          <div className='right-link'>
            <li>
              <NavLink className='link' to='/breakfast'>
                Breakfast
              </NavLink>
            </li>
            <li>
              <NavLink className='link' to='/mainDishes'>
                Main Dishes
              </NavLink>
            </li>
            <li>
              <NavLink className='link' to='/soups'>
                Soup
              </NavLink>
            </li>
            <li>
              <NavLink className='link' to='/salads'>
                Salads
              </NavLink>
            </li>
            <li>
              <NavLink className='link' to='/desserts'>
                Desserts
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
