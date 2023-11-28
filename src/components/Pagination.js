import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`mx-1 px-3 py-1 border rounded transition-colors duration-300 ${i === currentPage ? 'bg-purple-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`
        }
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center my-4">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        className="pagination-button"
      >
        이전
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        className="pagination-button"
      >
        다음
      </button>
    </div>
  );
};

export default Pagination;