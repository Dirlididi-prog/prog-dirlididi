import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { initProblems } from '../../actions/problem';
import Table from '../../components/table/table';
import Spinner from '../../components/spinner/spinner';
import './style/courses.css';
import { HEADERS_TABLE_ADD_PROBLEM } from '../../constants/problem-constants';

class ProblemsModal extends Component {
  componentDidMount () {
    this.props.onInitProblems();
  }

  addProblems () {
    // I need to find a better way to make this operation
    const selectedKeys = this.refs.table.refs.table.state.selectedRowKeys;
    const problems = this.props.problems.filter((problem) => {
      if (selectedKeys.includes(problem.key)) {
        return problem;
      }
      return false;
    });
    this.props.addProblems(problems);
    this.props.onHide();
  }

  renderTable () {
    if (this.props.isLoading) {
      return <Spinner />;
    }

    return (
      <Table
        ref='table'
        selectedItems={this.props.selectedItems.map(item => item.key)}
        selectRow
        headers={HEADERS_TABLE_ADD_PROBLEM}
        data={this.props.problems}
        useAsKey={'key'} />
    );
  }

  render () {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        bsSize='large'
        aria-labelledby='contained-modal-title-lg'>
        <Modal.Header>
          <Modal.Title>Add Problems</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {this.renderTable()}
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
          <Button bsStyle='primary' onClick={() => this.addProblems()}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => (
  {
    problems: state.problemReducer.problems,
    isLoading: state.problemReducer.isLoading
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onInitProblems: () => dispatch(initProblems())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProblemsModal);
