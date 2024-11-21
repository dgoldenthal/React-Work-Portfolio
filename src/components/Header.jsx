import React from 'react';
import Navigation from './Navigation';

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="bg-slate-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">John Developer</h1>
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </header>
  );
};

export default Header;