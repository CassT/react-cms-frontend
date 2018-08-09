import React from 'react';
import NavBar from './NavBar';

class Header extends React.Component {
  render() {
    return (
      <NavBar links={this.props.links} />
    );
  }
}

export default Header;
