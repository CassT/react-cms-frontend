import React from 'react';
import API_URL from '../config';
import dispatcher from '../dispatcher';
import * as LinkActions from '../actions/LinkActions';

class CreatePageForm extends React.Component {
  addPage() {
    const path=document.getElementById('pagePath').value;
    const title=document.getElementById('pageTitle').value;
    const content=document.getElementById('pageContent').value;
    const request_uri = API_URL + '/page';
    const request_data = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "path": path,
        "title": title,
        "content": content
      })
    }
    fetch(request_uri, request_data).then(response => {
      const pageData = response.json();
      LinkActions.createLink(path, title);
    });
  }

  render() {
    return(
      <form className="form-horizontal">
        <fieldset>
          <legend>Create Page</legend>
          <div className="form-group">
            <label for="pagePath" className="col-lg-2" control-label>Path</label>
            <div className="col-lg-10">
              <input type="text" className="form-control" id="pagePath" placeholder="path" />
            </div>
          </div>
          <div className="form-group">
            <label for="pageTitle" className="col-lg-2" control-label>Title</label>
            <div className="col-lg-10">
              <input type="text" className="form-control" id="pageTitle" placeholder="title" />
            </div>
          </div>
          <div className="form-group">
            <label for="pageContent" className="col-lg-2" control-label>Content</label>
            <div className="col-lg-10">
              <input type="text" className="form-control" id="pageContent" placeholder="content" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-lg-10 col-lg-offset-2">
              <button onClick={this.addPage} className="btn btn-primary">Create</button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default CreatePageForm;
