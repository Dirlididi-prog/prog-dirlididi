import React from 'react';
import CodeMirror from 'react-codemirror';

// If you want to support other languages, please remember to import them:
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/python/python';
import 'codemirror/lib/codemirror.css';

class CodeEditor extends React.Component {
  render () {
    return (
      <CodeMirror
        className='code-editor'
        onChange={this.props.onChange}
        options={{
          lineNumbers: true,
          mode: this.props.mode,
          theme: 'default'
        }}
        value={this.props.value} />
    );
  }
}

export default CodeEditor;
