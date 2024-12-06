import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../store/productsSlice";
import { RootState } from "../store";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: RootState) => state.products.currentPage
  );

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage > totalPages - 4) {
        pages.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center mt-8">
      <nav className="inline-flex -space-x-px">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-3 py-2 ml-0 leading-tight text-gray-500 dark:text-gray-300 bg-white dark:bg-secondary-dark border border-secondary dark:border-secondary-dark rounded-l-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
            currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
          }`}
          aria-label="Previous Page"
        >
          <FaChevronLeft />
        </button>
        {pageNumbers.map((page, index) =>
          page === "..." ? (
            <span
              key={`ellipsis-${index}`}
              className="px-3 py-2 leading-tight text-gray-500 dark:text-gray-300 bg-white dark:bg-secondary-dark border border-secondary dark:border-secondary-dark"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => handlePageChange(Number(page))}
              className={`px-3 py-2 leading-tight border border-secondary dark:border-secondary-dark ${
                page === currentPage
                  ? "text-white bg-primary dark:bg-primary-light"
                  : "text-gray-500 dark:text-gray-300 bg-white dark:bg-secondary-dark hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          )
        )}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 leading-tight text-gray-500 dark:text-gray-300 bg-white dark:bg-secondary-dark border border-secondary dark:border-secondary-dark rounded-r-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
            currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
          }`}
          aria-label="Next Page"
        >
          <FaChevronRight />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
