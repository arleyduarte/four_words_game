import {CHECK_GRAMMAR} from './types';
import fetch from 'cross-fetch';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map((child) => child.data),
    receivedAt: Date.now(),
  };
}

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit,
  };
}

export const REQUEST_POSTS = 'REQUEST_POSTS';
function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit,
  };
}

export const checkGrammar = (text) => {
  let res = encodeURI(text);

  // res = 'At any point fo time';
  console.log('checkGrammar Action ', res);
  return function (dispatch) {
    return fetch(
      `https://api.textgears.com/check.php?text=${res}&key=x0UsGA17Vd4D72ic`,
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({type: CHECK_GRAMMAR, payload: json});
      });
  };
};
