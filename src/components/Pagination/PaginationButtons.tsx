import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import ReactPaginate from "react-paginate";

type Page = {
  selected: number;
};

type PaginationButtonsProps = {
  action: (pageNumber: number) => void;
};

const PaginationButtons = (props: PaginationButtonsProps) => {
  const handlePageClick = (e: Page) => {
    props.action(e.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={
        <span className="pagination-action-btn text-slate-800">
          <AiFillCaretRight />
        </span>
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      pageCount={10}
      previousLabel={
        <span className="pagination-action-btn text-slate-800">
          <AiFillCaretLeft />
        </span>
      }
      renderOnZeroPageCount={null}
      containerClassName="paginate-container"
      pageClassName="paginate-pages"
      activeClassName="paginate-pages active"
    />
  );
};

export default PaginationButtons;
