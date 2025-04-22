// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center p-4 bg-gray-100">
      <Link to="/login" className="mr-4 text-black-600 hover:text-violet-800 hover:underline">
        Login
      </Link>
      <Link to="/dashboard" className="text-black-600 hover:text-violet-800 hover:underline">
        Dashboard
      </Link>
    </nav>
  );
};

export default Navbar;
