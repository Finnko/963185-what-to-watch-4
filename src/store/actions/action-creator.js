import {actionTypes} from '../action-types';

const ActionCreator = {
  fetchMoviesRequest: () => ({
    type: actionTypes.FETCH_MOVIES_REQUEST,
  }),
  fetchMoviesSuccess: (movies) => ({
    type: actionTypes.FETCH_MOVIES_SUCCESS,
    payload: movies,
  }),
  fetchMoviesError: () => ({
    type: actionTypes.FETCH_MOVIES_ERROR,
  }),
  fetchPromoSuccess: (promo) => ({
    type: actionTypes.FETCH_PROMO_SUCCESS,
    payload: promo,
  }),
  fetchPromoError: () => ({
    type: actionTypes.FETCH_PROMO_ERROR,
  }),
  changeActiveGenre: (genre) => ({
    type: actionTypes.CHANGE_ACTIVE_GENRE,
    payload: genre,
  }),
  changeMoviesLimit: (count) => ({
    type: actionTypes.CHANGE_MOVIES_LIMIT,
    payload: count,
  }),
  resetMoviesLimit: () => ({
    type: actionTypes.RESET_MOVIES_LIMIT,
  }),
  setAuth: (status) => ({
    type: actionTypes.SET_AUTH,
    payload: status,
  }),
  setError: (error) => ({
    type: actionTypes.SET_ERROR,
    payload: error,
  }),
  changeUserData: (data) => ({
    type: actionTypes.AUTHORIZE_USER,
    payload: data,
  }),
  loginRequest: () => ({
    type: actionTypes.LOGIN_REQUEST,
  }),
  loginSuccess: () => ({
    type: actionTypes.LOGIN_SUCCESS,
  }),
  loginError: () => ({
    type: actionTypes.LOGIN_ERROR,
  }),
  fetchCommentsRequest: () => ({
    type: actionTypes.FETCH_COMMENTS_REQUEST,
  }),
  fetchCommentsSuccess: (comments) => ({
    type: actionTypes.FETCH_COMMENTS_SUCCESS,
    payload: comments,
  }),
  fetchCommentsError: () => ({
    type: actionTypes.FETCH_COMMENTS_ERROR,
  }),
  sendCommentRequest: () => ({
    type: actionTypes.SEND_COMMENT_REQUEST,
  }),
  sendCommentSuccess: (comment) => ({
    type: actionTypes.SEND_COMMENT_SUCCESS,
    payload: comment,
  }),
  sendCommentError: () => ({
    type: actionTypes.SEND_COMMENT_ERROR,
  }),
  fetchFavoritesRequest: () => ({
    type: actionTypes.FETCH_FAVORITES_MOVIES_REQUEST,
  }),
  fetchFavoritesSuccess: (movies) => ({
    type: actionTypes.FETCH_FAVORITES_MOVIES_SUCCESS,
    payload: movies,
  }),
  fetchFavoritesError: () => ({
    type: actionTypes.FETCH_FAVORITES_MOVIES_ERROR,
  }),
  updateFavoriteStatusRequest: () => ({
    type: actionTypes.UPDATE_FAVORITE_STATUS_REQUEST,
  }),
  updateFavoriteStatusSuccess: (movie) => ({
    type: actionTypes.UPDATE_FAVORITE_STATUS_SUCCESS,
    payload: movie,
  }),
  updateFavoriteStatusError: () => ({
    type: actionTypes.UPDATE_FAVORITE_STATUS_ERROR,
  }),
};

export {ActionCreator};
