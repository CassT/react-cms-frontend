import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import API_URL from '../config';

class LinkStore extends EventEmitter {
  constructor() {
    super();
    this.links = [];
    // fetch(API_URL + '/navigation').then(results => {
    //   const initialLinks = results.json();
    //   console.log(initialLinks);
    //   this.links = initialLinks;
    //   this.emit("change");
    // });
    const request_uri = API_URL + '/navigation';
    console.log(request_uri);
    fetch(API_URL + '/navigation').then(results => {
      return results.json();
    }).then(jsonData => {
      for (var i = 0; i < jsonData.length; i++) {
        const navItem = jsonData[i];
        this.createLink(navItem.path, navItem.title);
        // this.links.push(navItem.path, navItem.title);
        // this.emit("change");
      }
      //this.emit("change");
    });
    // this.initializeLinks()
  }

  initializeLinks() {
  //   fetch(API_URL + '/navigation').then(results => {
  //     const initialLinks = results.json();
  //     this.links = initialLinks;
  //     this.emit("change");
  //   });
  }

  createLink(path, title) {
    this.links.push({
      path,
      title
    });
    this.emit("change");
  }

  deleteLink(path) {
    var remainingLinks = this.links.splice()
    for (var i=0; i < this.links.length; i++) {
      if (path !== this.links[i].path) {
        remainingLinks.push(this.links[i]);
      }
    }
    console.log(remainingLinks);
    this.links = remainingLinks;
    this.emit("change");
  }

  getAll() {
    return this.links;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_LINK": {
        this.createLink(action.path, action.title);
      }
      case "DELETE_LINK": {
        this.deleteLink(action.path);
      }
    }
  }
}

const linkStore = new LinkStore;
dispatcher.register(linkStore.handleActions.bind(linkStore));

export default linkStore;
