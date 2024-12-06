import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../store/productsSlice';
import { RootState } from '../store';
import { FaSearch } from 'react-icons/fa';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.products.searchTerm);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search products..."
        className="w-full pl-10 pr-4 py-2 border border-secondary dark:border-secondary-dark rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:bg-secondary-dark dark:text-secondary-light transition-colors duration-300"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary dark:text-secondary-dark" />
    </div>
  );
};

export default SearchBar;
