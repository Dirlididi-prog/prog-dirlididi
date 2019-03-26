import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './table.css';
import PropTypes from 'prop-types';

class Table extends Component {
  getSelectRowProps (selectRow) {
    if (selectRow) {
      return {
        mode: 'checkbox',
        clickToSelect: true,
        bgColor: '#5bc0de',
        selected: this.props.selectedItems
      };
    }
    return false;
  }

  render () {
    const options = {
      onRowClick: this.props.allowRedirect
    };

    const tableHeaderList = this.props.headersConfig.map((headerConfig) => {
      return (
        <TableHeaderColumn
          {...headerConfig}
          key={headerConfig.dataField}
          dataAlign='center'>
          { headerConfig.label }
        </TableHeaderColumn>
      );
    });

    const selectRowProps = this.getSelectRowProps(this.props.selectRow);

    return (
      <div>
        <BootstrapTable
          ref='table'
          selectRow={selectRowProps}
          {...this.props.tableConfig}
          data={this.props.data}
          options={options}
        >
          { tableHeaderList }
        </BootstrapTable>
      </div>
    );
  }
}

Table.protoTypes = {
  useAsKey: PropTypes.string.isRequired
};

export default Table;
