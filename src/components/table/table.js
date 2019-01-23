import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './table.css';
import PropTypes from 'prop-types';

const options = {
  onRowClick: function (row) {
    // Add modal here
    console.log('clicked');
  }
};

class Table extends Component {
  render () {
    const headers = this.props.headers;
    const tableHeaderList = Object.keys(headers).map((header) => {
      return (
        <TableHeaderColumn
          dataField={header}
          key={header}
          isKey={header === this.props.useAsKey}
          width={headers[header].width}
          dataAlign='center'>
          { headers[header].label }
        </TableHeaderColumn>
      );
    });

    return (
      <div>
        <BootstrapTable
          data={this.props.data}
          options={options}
          search
          pagination
          hover>
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
