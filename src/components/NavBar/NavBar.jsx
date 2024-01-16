import CartWidgets from '../cartwidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          <a href="/" className="text-lg font-bold text-yellow-400 font-serif">DeportesFull</a>
        </div>
        <div className="flex space-x-4">
          <NavLink to={'/'} className="text-gray-300 hover:text-white transition duration-300">Inicio</NavLink>
          <NavLink to={'/category/zapatillas'} className="text-gray-300 hover:text-white transition duration-300">Zapatillas</NavLink>
          <NavLink to={'/category/camisetas'} className="text-gray-300 hover:text-white transition duration-300">Camisetas</NavLink>
        </div>
        <CartWidgets />
      </div>
    </nav>
  );
}

export default NavBar;
