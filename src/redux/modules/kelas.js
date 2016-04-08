import fetch from 'isomorphic-fetch'
import { apiUrlConfig } from '../../utils/config'
const API_URL = apiUrlConfig + 'api/'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_KELAS_START = 'GET_KELAS_START'
export const GET_KELAS_SUCCESS = 'GET_KELAS_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------

// ------------------------------------
// Actions Get mahasiswa data
// ------------------------------------
function getKelasStart () {
  return {
    type: GET_KELAS_START
  }
}
function getKelasFinish (result) {
  return {
    type: GET_KELAS_SUCCESS,
    data: result
  }
}
export function getKelas () {
  return (dispatch) => {
    dispatch(getKelasStart())
    return fetch(API_URL + 'kelas', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((json) => dispatch(getKelasFinish(json)))
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
let initialState = {
  isLoading: false
}

export default function kelasReducers (state = initialState, action) {
  switch (action.type) {
    case GET_KELAS_START:
      return Object.assign({}, state, {
        isLoadingData: true
      })
    case GET_KELAS_SUCCESS:
      return Object.assign({}, state, {
        isLoadingData: false,
        data: action.data
      })
    default:
      return state
  }
}

