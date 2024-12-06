import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const ProductGrid: React.FC = () => {
  const { items, searchTerm, sortBy, currentPage, itemsPerPage } = useSelector(
    (state: RootState) => state.products
  );
  const filteredProducts = React.useMemo(() => {
    return items.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  // Sort products based on sortBy
  const sortedProducts = React.useMemo(() => {
    const sorted = [...filteredProducts];
    if (sortBy === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      sorted.sort((a, b) => b.rating.rate - a.rating.rate);
    }
    return sorted;
  }, [filteredProducts, sortBy]);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  return (
    <div className="mt-6">
      {/* Grid Layout */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </div>
  );
};

export default ProductGrid;
