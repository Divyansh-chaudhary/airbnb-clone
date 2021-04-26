import React, { useEffect, useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const Pagination = ({ totalPages = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ulRef = useRef(null);

  useEffect(() => {
    ulRef.current
      .querySelector(`button[data-pos='${currentPage}']`)
      .classList.add("current");
  }, [currentPage]);

  const clearCurrent = () =>
    ulRef.current
      .querySelectorAll("button[data-pos]")
      .forEach((el) => el.classList.remove("current"));

  const prevPage = () => {
    if (currentPage > 1) {
      clearCurrent();
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < 5) {
      clearCurrent();
      setCurrentPage(currentPage + 1);
    }
  };

  const changePage = (n) => {
    clearCurrent();
    setCurrentPage(n);
  };

  return (
    <div className="pagination">
      <ul ref={ulRef}>
        <li>
          <button onClick={prevPage}>
            <IoChevronBackOutline />
          </button>
        </li>
        {Array(totalPages)
          .fill()
          .map((_, i) => i + 1)
          .map((n) => (
            <li key={n}>
              <button onClick={() => changePage(n)} data-pos={n}>
                {n}
              </button>
            </li>
          ))}
        <li>
          <button onClick={nextPage}>
            <IoChevronForwardOutline />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
