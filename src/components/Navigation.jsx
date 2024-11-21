import React from 'react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'about', title: 'About Me' },
    { id: 'portfolio', title: 'Portfolio' },
    { id: 'contact', title: 'Contact' },
    { id: 'resume', title: 'Resume' }
  ];

  return (
    <nav>
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setCurrentPage(item.id)}
              className={`hover:text-blue-400 transition-colors ${
                currentPage === item.id ? 'text-blue-400 font-bold' : ''
              }`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;