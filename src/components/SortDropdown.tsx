import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../store/productsSlice';
import { RootState } from '../store';
import { FaSort } from 'react-icons/fa';

const SortDropdown: React.FC = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state: RootState) => state.products.sortBy);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(e.target.value));
  };

  return (
    <div className="relative w-full max-w-xs">
      <select
        value={sortBy}
        onChange={handleChange}
        className="w-full pl-10 pr-4 py-2 border border-secondary dark:border-secondary-dark rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary dark:bg-secondary-dark dark:text-secondary-light transition-colors duration-300"
      >
        <option value="">Sort By</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
      <FaSort className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary dark:text-secondary-dark pointer-events-none" />
    </div>
  );
};

export default SortDropdown;