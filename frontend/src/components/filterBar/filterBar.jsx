import PropTypes from "prop-types";
import { OrderSelect } from "../orderSelect/orderSelect.jsx";
import { TaskPagination } from "../taskPagination/taskPagination.jsx";

export function FilterBar({ page, totalPages, order, onPageChange, onOrderChange }) {
  return (
    <nav className="flex flex-row justify-between mb-8">
      <TaskPagination
        page={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      <OrderSelect value={order} onChange={onOrderChange} />
    </nav>
  );
}

FilterBar.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  order: PropTypes.string.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onOrderChange: PropTypes.func.isRequired,
};
