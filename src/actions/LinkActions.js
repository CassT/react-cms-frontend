import dispatcher from '../dispatcher';

export function createLink(path, title) {
  dispatcher.dispatch({
    type: "CREATE_LINK",
    path,
    title
  });
}

export function deleteLink(path) {
  dispatcher.dispatch({
    type: "DELETE_LINK",
    path
  });
}
