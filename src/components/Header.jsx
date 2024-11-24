import React from 'react';
import Navigation from './Navigation';

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="w-full bg-slate-800 text-white p-4" style={{ width: '100vw' }}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dov Goldenthal</h1>
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </header>
  );
};

export default Header;