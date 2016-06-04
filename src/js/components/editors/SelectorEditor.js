import React from 'react'
import {appendContent}  from '../../actions/contentActions'
export default class SelectorEditor extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li onClick={this.onClick.bind(this)}>FeatureList</li>
          <li onClick={this.onClick.bind(this)}>Workflow</li>
          <li onClick={this.onClick.bind(this)}>Social</li>
        </ul>
      </div>
    );
  }

  onClick(event) {
    this.props.store.dispatch(appendContent(event.target.innerText, this.props.index));
  }
}