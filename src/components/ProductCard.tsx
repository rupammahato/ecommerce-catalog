import React from 'react';
import { Product } from '../types';
import { FaStar } from 'react-icons/fa';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = (({ product }) => {
  return (
    <div className="bg-white dark:bg-secondary-dark rounded-lg shadow-md overflow-hidden flex flex-col transition-transform transform hover:scale-105 duration-300">
      <div className="h-48 flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-full w-full"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-primary dark:text-primary-light mb-2">
          {product.title}
        </h2>
        <p className="text-xl font-bold text-primary dark:text-primary-light mb-4">
          ${product.price.toFixed(2)}
        </p>
        <div className="mt-auto flex items-center">
          <FaStar className="text-amber-400 mr-1" />
          <span className="text-primary dark:text-primary-light">
            {product.rating.rate} / 5 ({product.rating.count})
          </span>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;