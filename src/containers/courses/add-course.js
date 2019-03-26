import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageHeader, ControlLabel, FormGroup, FormControl, HelpBlock, Button, ListGroup } from 'react-bootstrap';
import { postCourse } from '../../actions/course-action';
import ProblemsModal from './problems-modal';
import CustomAlert from '../../components/alert/custom-alert';
import './style/courses.css';

class AddCourse extends Component {
  state = {
    name: '',
    description: '',
    language: '',
    selectedProblems: [],
    show: false,
    showAlert: false
  }

  openProblemsModal = () => {
    this.setState({ show: true });
  }

  addProblems = (problems) => {
    this.setState({ selectedProblems: problems });
  }

  removeProblem = (problem) => {
    const selectedProblems = this.state.selectedProblems.filter(item => {
      if (problem.key !== item.key) {
        return problem;
      }
      return false;
    });

    this.setState({ selectedProblems });
  }

  handleModalHide = () => {
    this.setState({ show: false });
  }

  handleShowAlert = () => {
    this.setState({ showAlert: true });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    const course = {
      name: this.state.name,
      description: this.state.description,
      language: this.state.language,
      problems: this.state.selectedProblems
    };
    this.handleShowAlert();
    this.props.onCreateCourse(course);
  }

  renderProblemModal () {
    if (this.state.show) {
      return <ProblemsModal show={this.state.show} onHide={this.handleModalHide} selectedItems={this.state.selectedProblems} addProblems={this.addProblems} />;
    }
  }

  renderShowAlert () {
    if (this.state.showAlert) {
      return <CustomAlert showAlert={this.state.showAlert} />;
    }
  }

  renderProblems () {
    if (this.state.selectedProblems.length === 0) {
      return <div className='form-group'>There is no problems added</div>;
    }

    const itens = this.state.selectedProblems.map((problem) => {
      return (
        <li className='list-group-item' key={problem.key}>
          <div className='item-list'>
            <h4 className='item-group-item-heading'>{problem.name}</h4>
            <p className='item-group-item-text'><b>key:</b> {problem.key}</p>
          </div>
          <Button
            className='remove-button'
            bsStyle='danger'
            onClick={() => this.removeProblem(problem)}
          >X</Button>
        </li>
      );
    });

    return <ListGroup className='form-control-field'>{itens}</ListGroup>;
  }

  render () {
    return (
      <div>
        <div className='course-form'>
          <PageHeader>
            Create Course
          </PageHeader>
          {this.renderShowAlert()}
          <div>
            <form onSubmit={this.onFormSubmit}>
              <FieldGroup
                id='course-name'
                className='form-control-field'
                type='text'
                label='Name'
                placeholder='Enter the course name'
                required
                onChange={(e) => this.setState({ name: e.target.value })} />
              <FieldGroup
                id='course-description'
                className='form-control-field'
                componentClass='textarea'
                type='text'
                label='Description'
                placeholder='Enter the course description'
                onChange={(e) => this.setState({ description: e.target.value })} />
              <FieldGroup
                id='course-language'
                className='form-control-field'
                type='text'
                label='Language'
                placeholder='Enter the course language'
                onChange={(e) => this.setState({ language: e.target.value })} />
              <label>LIst of Problems</label>
              <div>
                <Button className='button-add' type='button' bsStyle='info' onClick={this.openProblemsModal}>+ Add Problem</Button>
              </div>
              {this.renderProblems()}
              <Button className='button-submit' bsStyle='primary' type='submit'>Submit</Button>
            </form>
          </div>
        </div>

        {this.renderProblemModal()}
      </div>

    );
  }
}

function FieldGroup ({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

// const mapStateToProps = (state) => {
// console.log(state);
//  return { course: state.courseReducer.course };
// };

const mapDispatchToProps = dispatch => (
  {
    onCreateCourse: (course) => dispatch(postCourse(course))
  }
);

export default connect(null, mapDispatchToProps)(AddCourse);
