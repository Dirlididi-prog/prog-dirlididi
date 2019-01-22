import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './table.css';

const options = {
  onRowClick: function (row) {
    // Add modal here
    console.log('clicked');
  }
};

class Table extends Component {
  constructor (props) {
    super(props);

    this.state = {
      headers: props.headers,
      data: props.data
    };
  }

  renderColumns () {
    return Object.keys(this.state.headers).map((header) => {
      return (
        <TableHeaderColumn dataField={header} >
          { this.state.headers[header] }
        </TableHeaderColumn>
      );
    });
  }

  render () {
    return (
      <div>
        <BootstrapTable
          data={this.state.data}
          options={options}
          keyField='key'
          search
          pagination
          hover
        >
          { this.renderColumns() }
        </BootstrapTable>
      </div>
    );
  }
}

export default Table;
