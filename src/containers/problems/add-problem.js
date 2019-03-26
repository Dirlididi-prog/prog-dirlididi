import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';

import * as problemAction from '../../actions/problem-actions';
import AddProblemForm from '../../components/form/add-problem-form';
import CustomAlert from '../../components/alert/custom-alert';
import './style/problems.css';

class AddProblem extends Component {
  constructor (props) {
    super(props);

    this.state = {
      showAlert: false,
      name: '',
      description: '',
      tip: '',
      tags: [''],
      tests: [{ name: '', tip: '', input: '', output: '' }]
    };
  }

  handleProblemNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleProblemDescriptionChange = newValue => {
    this.setState({ description: newValue });
  };

  handleProblemTipChange = event => {
    this.setState({ tip: event.target.value });
  };

  // <----------------------- Adding tags -----------------------> //
  handleTagChange = index => event => {
    const newTags = this.state.tags.map((tag, tindex) => {
      if (index !== tindex) return tag;
      return event.target.value;
    });

    this.setState({ tags: newTags });
  };

  handleAddTag = () => {
    this.setState({
      tags: this.state.tags.concat([''])
    });
  };

  handleRemoveTag = index => () => {
    this.setState({
      tags: this.state.tags.filter((t, tindex) => index !== tindex)
    });
  };
  // <-----------------------------------------------------------> //

  // <----------------------- Adding tests -----------------------> //
  handleTestChange = (key, index, event) => {
    const newTests = this.state.tests.map((test, tindex) => {
      if (index !== tindex) return test;
      return { ...test, [key]: event.target.value };
    });

    this.setState({ tests: newTests });
  };

  handleAddTest = () => {
    this.setState({
      tests: this.state.tests.concat([{ name: '', tip: '', input: '', output: '' }])
    });
  };

  handleRemoveTest = index => () => {
    this.setState({
      tests: this.state.tests.filter((t, tindex) => index !== tindex)
    });
  };
  // <------------------------------------------------------------> //

  handleSubmit = event => {
    event.preventDefault();

    const problem = {
      name: this.state.name,
      description: this.state.description,
      tip: this.state.tip,
      tags: this.state.tags,
      tests: this.state.tests
    };
    this.props.onCreateProblem(problem);
    this.handleShowAlert();
  };

  handleShowAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  render () {
    return (
      <div id='add-problem-form'>
        <PageHeader>
          Add Problem
        </PageHeader>
        <CustomAlert showAlert={this.state.showAlert} />
        <AddProblemForm
          tags={this.state.tags}
          tests={this.state.tests}
          handleProblemNameChange={this.handleProblemNameChange}
          handleProblemDescriptionChange={this.handleProblemDescriptionChange}
          handleProblemTipChange={this.handleProblemTipChange}
          handleAddTag={this.handleAddTag}
          handleTagChange={this.handleTagChange}
          handleRemoveTag={this.handleRemoveTag}
          handleTestChange={this.handleTestChange}
          handleAddTest={this.handleAddTest}
          handleRemoveTest={this.handleRemoveTest}
          handleSubmit={this.handleSubmit}
          problemMarkdown={this.state.description}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  {
    onCreateProblem: (problem) => dispatch(problemAction.createProblem(problem))
  }
);

export default connect(null, mapDispatchToProps)(AddProblem);
