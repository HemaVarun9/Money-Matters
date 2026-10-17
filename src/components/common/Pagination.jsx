import Button from './Button'
import BUTTON_VARIANTS from '../../constants/buttonVariants'

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  return (
    <div className="pagination">
      <Button
        variant={BUTTON_VARIANTS.SECONDARY}
        disabled={isFirstPage}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>

      <span className="pagination__info">
        Page {currentPage} of {totalPages}
      </span>

      <Button
        variant={BUTTON_VARIANTS.SECONDARY}
        disabled={isLastPage}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  )
}

export default Pagination