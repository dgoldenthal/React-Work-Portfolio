import React from 'react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="header-nav"> {/* Added the new class here */}
      <ul className="flex space-x-6">
        {['about', 'portfolio', 'contact', 'resume'].map((page) => (
          <li key={page}>
            <button
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded ${
                currentPage === page 
                  ? 'bg-white text-slate-800' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {page === 'about' ? 'About Me' : page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;