import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import counter from './modules/counter'
import mahasiswa from './modules/mahasiswa'
import dosen from './modules/dosen'
import kelas from './modules/kelas'
import mk from './modules/mk'
import ruangan from './modules/ruangan'

export const GET_MAHASISWA_DATA_BY_NIM_SUCCESS = 'GET_MAHASISWA_DATA_BY_NIM_SUCCESS'

export default combineReducers({
  mahasiswa,
  dosen,
  kelas,
  mk,
  ruangan,
  counter,
  router,
  form: formReducer.plugin({
    updateMahasiswaForm: (state, action) => {
      switch (action.type) {
        case GET_MAHASISWA_DATA_BY_NIM_SUCCESS:
          return {
            ...state,
            nim: { value: action.data.data[0].nim },
            nama: { value: action.data.data[0].nama },
            email: { value: action.data.data[0].email },
            kelas: { value: action.kelas },
            tahunMasuk: { value: action.tahun_masuk },
            noHp: { value: action.data.data[0].no_hp },
            tanggal: { value: action.tanggal },
            bulan: { value: action.bulan },
            tahun: { value: action.tahun },
            alamatRumah: { value: action.data.data[0].alamat_rumah },
            alamatTinggal: { value: action.data.data[0].alamat_tinggal },
            deviceId: { value: action.data.data[0].device_id }
          }
        default:
          return state
      }
    }
  })
})
