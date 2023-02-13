import PropTypes from 'prop-types'

import Pagination from '../PaginationItem'

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

const DataTablePagination = ({
  page,
  rows,
  totalRecords,
  onPageChange,
  ...restProps
}) => {
  const totalPages = Math.ceil(totalRecords / rows)

  let items = []

  if (totalPages <= 6) {
    items = items.concat(
      range(1, totalPages, 1).map((value) => {
        return (
          <Pagination.Item
            active={value === page ? true : false}
            key={value}
            onClick={() => onPageChange(value)}
          >
            {value}
          </Pagination.Item>
        )
      }),
    )
  } else if (page <= 3) {
    items = items
      .concat(
        range(1, 5, 1).map((value) => {
          return (
            <Pagination.Item
              active={value === page ? true : false}
              key={value}
              onClick={() => onPageChange(value)}
            >
              {value}
            </Pagination.Item>
          )
        }),
      )
      .concat(<Pagination.Ellipsis key="last-ellipsis" />)
      .concat(
        <Pagination.Item
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </Pagination.Item>,
      )
  } else if (page > totalPages - 3) {
    items = items
      .concat(
        <Pagination.Item
          active={1 === page ? true : false}
          key={1}
          onClick={() => onPageChange(1)}
        >
          1
        </Pagination.Item>,
      )
      .concat(<Pagination.Ellipsis key="first-ellipsis" />)
      .concat(
        range(totalPages - 3, totalPages, 1).map((value) => {
          return (
            <Pagination.Item
              active={value === page ? true : false}
              key={value}
              onClick={() => onPageChange(value)}
            >
              {value}
            </Pagination.Item>
          )
        }),
      )
  } else {
    items = items
      .concat(
        <Pagination.Item onClick={() => onPageChange(1)} key={1}>
          {1}
        </Pagination.Item>,
      )
      .concat(<Pagination.Ellipsis key="first-ellipsis" />)
      .concat(
        range(page - 2, page + 2, 1).map((value) => {
          return (
            <Pagination.Item
              active={value === page ? true : false}
              key={value}
              onClick={() => onPageChange(value)}
            >
              {value}
            </Pagination.Item>
          )
        }),
      )
      .concat(<Pagination.Ellipsis key="last-ellipsis" />)
      .concat(
        <Pagination.Item
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </Pagination.Item>,
      )
  }

  return (
    <Pagination.Container {...restProps}>
      <Pagination.First onClick={() => onPageChange(1)} />
      {items}
      <Pagination.Last onClick={() => onPageChange(totalPages)} />
    </Pagination.Container>
  )
}

DataTablePagination.defaultProps = {
  page: 0,
  rows: 10,
  totalRecords: 0,
  onPageChange: () => null,
}

DataTablePagination.propTypes = {
  page: PropTypes.number,
  rows: PropTypes.number,
  totalRecords: PropTypes.number,
  onPageChange: PropTypes.func,
}

export default DataTablePagination
