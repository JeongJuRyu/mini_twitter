import produce from "../util/produce";

export const SUBMIT_POST_REQUEST = "SUBMIT_POST_REQUEST";
export const SUBMIT_POST_SUCCESS = "SUBMIT_POST_SUCCESS";
export const SUBMIT_POST_FAILURE = "SUBMIT_POST_FAILURE";

export const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
export const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
export const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

const initialState = {
  Posts: [],
  imagePaths: [],
  hasMorePosts: true,
  uploadPostLoading: false,
  uploadPostError: false,
  uploadPostComplete: null,
  loadPostLoading: false,
  loadPostComplete: false,
  loadPostError: null,
  removePostLoading: false,
  removePostComplete: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentComplete: false,
  addCommentError: null,
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostComplete = false;
        draft.loadPostError = null;
        break;
      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostComplete = true;
        draft.loadPostError = null;
        break;
      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostComplete = false;
        draft.loadPostError = null;
        break;
      case SUBMIT_POST_REQUEST:
        draft.Posts.unshift(action.data);
        draft.loadPostLoading = true;
        draft.loadPostComplete = false;
        draft.loadPostError = null;
        break;
      default:
        break;
    }
  });

export default reducer;
