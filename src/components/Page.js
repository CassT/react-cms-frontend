import React from 'react';
import API_URL from '../config';
import { Redirect } from 'react-router-dom';
import * as LinkActions from '../actions/LinkActions';

class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      path: "",
      title: "",
      content: ""
    }
  }

  componentWillReceiveProps(newProps) {
    console.log("component will receive props method " + newProps.path);
    if (newProps.path !== this.state.path) {
      const request_uri = API_URL + '/page?path=' + newProps.path;
      fetch(request_uri).then(response => {
        return response.json();
      }).then(pageData => {
        this.setState({...pageData});
      });
    }
  }

  deletePage() {
    if (this.state.path !== "/") {
      const request_uri = API_URL + "/page";
      const delete_data = {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          "path": this.state.path,
        }),
      }
      fetch(request_uri, delete_data).then(response => {
        console.log(response.json());
        LinkActions.deleteLink(this.state.path);
        // return <Redirect to="/" />
      });
    }
    else {
      alert("Don't delete root!")
    }
  }

  render() {
    console.log("rendering " + this.state.path);
    return(
      <div>
        <h1>{this.state.title}</h1>
        <div>{this.state.content}</div>
        <a onClick={this.deletePage.bind(this)} className="btn btn-danger">DELETE</a>
      </div>
    );
  }
}

export default Page;
