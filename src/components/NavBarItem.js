import React from 'react';
import { Link } from 'react-router-dom';

// Render a single Navigation element
class NavBarItem extends React.Component {
  // const linkData = this.props.linkData;

  render() {
    const path = this.props.linkData.path;
    const title = this.props.linkData.title
    return (
      <li><Link to={path}>{title}</Link></li>
    );
  }
}

export default NavBarItem;
