import React from 'react';
import SearchBar from './SearchBar';
import SortDropdown from './SortDropdown';
import DarkModeToggle from './DarkModeToggle';
import { FaShoppingCart } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-primary dark:bg-primary-light shadow">
      <div className="container flex flex-col md:flex-row items-center justify-between py-4">
        <div className="flex items-center mb-4 md:mb-0">
          <FaShoppingCart className="text-white dark:text-primary-dark text-3xl mr-2" />
          <h1 className="text-2xl font-semibold text-white dark:text-primary-dark">E-commerce Product Catalog</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <SearchBar />
          <SortDropdown />
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
