import { AutoSizer, Column, Table } from 'react-virtualized'
import PropTypes from 'prop-types'

import Pagination from './Pagination'

const DataTable = ({
  tableConfig,
  dataList,
  page,
  rows,
  totalRecords,
  onPageChange,
}) => {
  return (
    <div className="showroom-data-table-wrapper">
      <div className="showroom-data-table">
        <AutoSizer>
          {({ width }) => (
            <>
              <Table
                width={width}
                height={(dataList.length + 1) * 30}
                headerHeight={30}
                rowHeight={30}
                rowCount={dataList.length}
                rowGetter={({ index }) => dataList[index]}
                style={{ pointerEvents: null }}
              >
                {tableConfig.map((col, index) => {
                  const { dataKey, label, width, ...restProps } = col
                  return (
                    <Column
                      key={index}
                      dataKey={dataKey}
                      label={label}
                      width={width || 100}
                      {...restProps}
                    />
                  )
                })}
              </Table>
              <Pagination
                page={page}
                rows={rows}
                totalRecords={totalRecords}
                onPageChange={onPageChange}
                style={{ width: `${width}px` }}
              />
            </>
          )}
        </AutoSizer>
      </div>
    </div>
  )
}

DataTable.defaultProps = {
  tableConfig: [],
  page: 0,
  rows: 10,
  totalRecords: 0,
  onPageChange: () => null,
}

DataTable.propTypes = {
  /**
   * the config is refernece to react-virtualized column component
   * @see https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md
   */
  tableConfig: PropTypes.array,
  page: PropTypes.number,
  rows: PropTypes.number,
  totalRecords: PropTypes.number,
  onPageChange: PropTypes.func,
}

export default DataTable
