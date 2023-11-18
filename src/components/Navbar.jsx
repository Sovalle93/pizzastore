import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { PizzaCalc } from '../context/my_context'

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? 'active' : undefined);

  const { total } = useContext(PizzaCalc);

  return (
    <nav className='navbar'>
      <NavLink className={`customNavLink ${setActiveClass}`} to="/">
        <img className='pizzalogo' src='https://www.svgrepo.com/show/489872/pizza.svg' alt="Pizza Logo"></img>
        Pizzeria Mamma Mia!
      </NavLink>
      <NavLink className={`customNavLink ${setActiveClass}`} to="/Carrito">
        <img className='carritologo' src='https://www.svgrepo.com/show/80543/shopping-cart-outline.svg' alt="Carrito Logo"></img>
          ({total})
      </NavLink>
    </nav>
  );
};

export default Navbar;
