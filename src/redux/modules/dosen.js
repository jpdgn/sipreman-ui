import fetch from 'isomorphic-fetch'
import { apiUrlConfig } from '../../utils/config'
const API_URL = apiUrlConfig + 'api/'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_DOSEN_DATA_START = 'GET_DOSEN_DATA_START'
export const GET_DOSEN_DATA_SUCCESS = 'GET_DOSEN_DATA_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------

// ------------------------------------
// Actions Get user data
// ------------------------------------
function getDosenDataStart () {
  return {
    type: GET_DOSEN_DATA_START
  }
}
function getDosenDataFinish (result) {
  return {
    type: GET_DOSEN_DATA_SUCCESS,
    data: result
  }
}
export function getDosenData () {
  return (dispatch) => {
    dispatch(getDosenDataStart())
    return fetch(API_URL + 'dosen', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((json) => dispatch(getDosenDataFinish(json)))
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
let initialState = {
}

export default function dosenReducers (state = initialState, action) {
  switch (action.type) {
    case GET_DOSEN_DATA_START:
      return Object.assign({}, state, {
        isLoadingData: true,
        isRequestingUserData: true
      })
    case GET_DOSEN_DATA_SUCCESS:
      return Object.assign({}, state, {
        data: action.data
      })
    default:
      return state
  }
}

