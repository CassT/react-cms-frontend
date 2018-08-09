import React from 'react';

class About extends React.Component {
  render() {
    console.log(this.props.location.pathname);
    return(
      <h1>About page</h1>
    );
  }
}

export default About;
