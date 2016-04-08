import fetch from 'isomorphic-fetch'
import { apiUrlConfig } from '../../utils/config'
const API_URL = apiUrlConfig + 'api/'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_MK_START = 'GET_MK_START'
export const GET_MK_SUCCESS = 'GET_MK_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------

// ------------------------------------
// Actions Get mahasiswa data
// ------------------------------------
function getMkStart () {
  return {
    type: GET_MK_START
  }
}
function getMkFinish (result) {
  return {
    type: GET_MK_SUCCESS,
    data: result
  }
}
export function getMk () {
  return (dispatch) => {
    dispatch(getMkStart())
    return fetch(API_URL + 'mk', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((json) => dispatch(getMkFinish(json)))
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
let initialState = {
  isLoading: false
}

export default function mataKuliahReducers (state = initialState, action) {
  switch (action.type) {
    case GET_MK_START:
      return Object.assign({}, state, {
        isLoadingData: true
      })
    case GET_MK_SUCCESS:
      return Object.assign({}, state, {
        isLoadingData: false,
        data: action.data
      })
    default:
      return state
  }
}

