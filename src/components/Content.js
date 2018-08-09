import React from 'react';

// Should be variable content created by editor
class Content extends React.Component {
  render() {
    return (
      <div>{this.props.content}</div>
    )
  }
}
