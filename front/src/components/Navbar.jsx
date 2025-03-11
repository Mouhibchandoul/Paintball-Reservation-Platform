import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Produits</Link></li>
        <li><Link to="/categories">Catégories</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;