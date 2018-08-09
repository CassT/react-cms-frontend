import React from 'react';
import NavBarItem from './NavBarItem';
import LinkStore from '../stores/LinkStore';
import * as LinkActions from '../actions/LinkActions';

// Should be passed page data of form
// [{label, location, children, displayChildren}], start with just links...
class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"data-toggle="collapse" data-target="#navigationbar">
              <span className="sr-only">Toggle Navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">Brand</a>
          </div>

          <div className="collapse navbar-collapse" id="navigationbar">
            <ul className="nav navbar-nav">
              {this.props.links.map( function(linkData){
                return(<NavBarItem linkData={linkData} />)
              })}
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <NavBarItem linkData={{title:"Create Page", path: "/create"}} />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
