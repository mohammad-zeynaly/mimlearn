const CoursePagination = ({
  pageNumbers,
  currentPage,
  setCurrentPage,
}: {
  pageNumbers: number[] | undefined;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const changePaginatedProduct = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {pageNumbers &&
        pageNumbers.map((pageNum) => (
          <button
            key={pageNum}
            className={` bg-[rgba(0,0,0,.08)]  py-1 px-4 rounded-lg ${
              pageNum + 1 === currentPage ? "bg-primary text-white" : ""
            }`}
            onClick={() => changePaginatedProduct(pageNum + 1)}
          >
            {pageNum + 1}
          </button>
        ))}
    </>
  );
};

export default CoursePagination;
