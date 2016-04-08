import fetch from 'isomorphic-fetch'
import { apiUrlConfig } from '../../utils/config'
const API_URL = apiUrlConfig + 'api/'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_RUANGAN_START = 'GET_RUANGAN_START'
export const GET_RUANGAN_SUCCESS = 'GET_MK_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------

// ------------------------------------
// Actions Get mahasiswa data
// ------------------------------------
function getRuanganStart () {
  return {
    type: GET_RUANGAN_START
  }
}
function getRuanganFinish (result) {
  return {
    type: GET_RUANGAN_SUCCESS,
    data: result
  }
}
export function getRuangan () {
  return (dispatch) => {
    dispatch(getRuanganStart())
    return fetch(API_URL + 'ruangan', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((json) => dispatch(getRuanganFinish(json)))
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
let initialState = {
  isLoading: false
}

export default function ruanganReducers (state = initialState, action) {
  switch (action.type) {
    case GET_RUANGAN_START:
      return Object.assign({}, state, {
        isLoadingData: true
      })
    case GET_RUANGAN_SUCCESS:
      return Object.assign({}, state, {
        isLoadingData: false,
        data: action.data
      })
    default:
      return state
  }
}

