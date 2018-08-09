import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page from './Page';
import API_URL from '../config';
import CreatePageForm from './CreatePageForm';

class Main extends React.Component {
  routeFromPath(path) {
    console.log("making route for " + path)
    return(
      <Route exact path={path} render={() => <Page path={path} />} />
    )
  }

  render() {
    const paths = this.props.links.map(linkData => linkData.path);
    return(
      <main>
        <Switch>
          <Route exact path="/create" component={CreatePageForm} />

          {paths.map(path => this.routeFromPath(path))}
        </Switch>
      </main>
    );
  }
}

export default Main;
