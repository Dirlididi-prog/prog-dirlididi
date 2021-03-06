import React, { Component } from 'react';
import { Button, ControlLabel, FormGroup } from 'react-bootstrap';

import './form.css';

class AddTextAreaForm extends Component {
  render () {
    return (
      <FormGroup>
        <ControlLabel> {this.props.label} </ControlLabel>
        { this.props.data.map((component, index) => (
          <div className='input-group mb-3' key={'test' + index.toString()}>
            {Object.keys(component).map((key) => (
              <textarea
                id='textarea-input'
                type='text'
                key={'test' + index.toString() + key}
                className='form-control'
                placeholder={`#${index + 1} ${key}`}
                value={component.key}
                onChange={(event) => this.props.handleTextAreaChange(key, index, event)} />
            ))}
            <Button
              id='remove-textarea-btn'
              className='btn btn-outline-secondary input-group-append'
              onClick={this.props.handleRemoveComponent(index)}
            > {'-'} </Button>
          </div>
        )) }
        <div>
          <Button
            id='add-text-area-btn'
            onClick={this.props.handleAddComponent}
          > {'+'} </Button>
        </div>
      </FormGroup>
    );
  }
}

export default AddTextAreaForm;
