import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';
import { Product } from '../../types';

const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  price: 99.99,
  description: 'A great product',
  category: 'electronics',
  image: 'https://fakestoreapi.com/img/test.jpg',
  rating: {
    rate: 4.5,
    count: 120,
  },
};

test('renders product details correctly', () => {
  render(<ProductCard product={mockProduct} />);
  
  // Check for product title
  expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
  
  // Check for product price
  expect(screen.getByText(/\$99.99/)).toBeInTheDocument();
  
  // Check for product rating
  expect(screen.getByText(/4.5 \/ 5/i)).toBeInTheDocument();
  
  // Check for product image
  const img = screen.getByAltText(/Test Product/i) as HTMLImageElement;
  expect(img).toBeInTheDocument();
  expect(img.src).toBe(mockProduct.image);
});