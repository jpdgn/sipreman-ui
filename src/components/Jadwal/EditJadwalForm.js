import React, { Component, PropTypes } from 'react'
// import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { updateJadwal } from '../../redux/modules/jadwal'

const form = 'editJadwalForm'
const fields = ['kode', 'hari', 'jam_mulai', 'jam_selesai', 'kelas', 'semester', 'akademik',
'ruangan', 'mata_kuliah', 'dosen']

class EditJadwalForm extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    values: PropTypes.object,
    fields: PropTypes.object,
    handleSubmit: PropTypes.func,
    isLoading: PropTypes.bool,
    message: PropTypes.string,
    jabatan: PropTypes.object,
    kelas: PropTypes.object,
    semester: PropTypes.object,
    akademik: PropTypes.object,
    ruangan: PropTypes.object,
    mk: PropTypes.object,
    dosen: PropTypes.object
  }

  componentDidMount () {

  }

  handleSubmit = () => {
    let { dispatch } = this.props
    var kode = this.props.values.kode
    var jadwal = {
      hari: this.props.values.hari,
      jam_mulai: this.props.values.jam_mulai,
      jam_selesai: this.props.values.jam_selesai,
      id_kelas: this.props.values.kelas,
      id_semester: this.props.values.semester,
      id_akademik: this.props.values.akademik,
      id_ruangan: this.props.values.ruangan,
      id_mk: this.props.values.mata_kuliah,
      id_dosen: this.props.values.dosen
    }
    console.log(jadwal)
    dispatch(updateJadwal(kode, jadwal))
  }

  render () {
    const {fields: {kode, hari, jam_mulai, jam_selesai, kelas, semester, akademik, ruangan, mata_kuliah,
     dosen}} = this.props
    var kelasData = this.props.kelas
    var semesterData = this.props.semester
    var akademikData = this.props.akademik
    var ruanganData = this.props.ruangan
    var mataKuliahData = this.props.mk
    var dosenData = this.props.dosen
    var hariData = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']

    var kelasOption = []
    var semesterOption = []
    var akademikOption = []
    var ruanganOption = []
    var mataKuliahOption = []
    var dosenOption = []
    var hariOption = []

    for (var a = 0; a < kelasData.data.length; a++) {
      kelasOption.push(<option value={kelasData.data[a].kode}>{kelasData.data[a].kelas}</option>)
    }
    for (var b = 0; b < semesterData.data.length; b++) {
      semesterOption.push(<option value={semesterData.data[b].kode}>{semesterData.data[b].semester}</option>)
    }
    for (var c = 0; c < akademikData.data.length; c++) {
      akademikOption.push(<option value={akademikData.data[c].kode}>{akademikData.data[c].akademik}</option>)
    }
    for (var d = 0; d < ruanganData.data.length; d++) {
      ruanganOption.push(<option value={ruanganData.data[d].kode}>{ruanganData.data[d].ruangan}</option>)
    }
    for (var e = 0; e < mataKuliahData.data.length; e++) {
      mataKuliahOption.push(<option value={mataKuliahData.data[e].kode}>{mataKuliahData.data[e].mata_kuliah}</option>)
    }
    for (var f = 0; f < dosenData.data.length; f++) {
      dosenOption.push(<option value={dosenData.data[f].nip}>{dosenData.data[f].nama_dosen}</option>)
    }
    for (var g = 0; g < hariData.length; g++) {
      hariOption.push(<option value={g + 1}>{hariData[g]}</option>)
    }
    return (
      <div className='ui main grid'>
        <div className='sixteen wide stretched column'>
          <div className='ui segment'>
            <form className='ui form' onSubmit={this.handleSubmit}>
              <h3 className='ui dividing header'>Informasi Pendidikan</h3>
              <div className='fields'>
                <div className='eight wide field'>
                  <label>Kode</label>
                  <input
                    {...kode}
                    disabled
                    type='text'
                    name='kode'
                    placeholder='Kode Jadwal'
                  />
                </div>
                <div className='eight wide field'>
                  <label>Hari</label>
                  <select className='ui dropdown'{...hari}>
                    {hariOption}
                  </select>
                </div>
              </div>
              <div className='fields'>
                <div className='eight wide field'>
                  <label>Jam Mulai</label>
                  <select className='ui dropdown' {...jam_mulai}>
                    <option value='07:30:00'>07:30:00</option>
                    <option value='08:20:00'>08:20:00</option>
                    <option value='09:10:00'>09:10:00</option>
                    <option value='10:00:00'>10:00:00</option>
                    <option value='10:50:00'>10:50:00</option>
                    <option value='11:40:00'>11:40:00</option>
                    <option value='12:30:00'>12:30:00</option>
                    <option value='13:20:00'>13:20:00</option>
                    <option value='14:10:00'>14:10:00</option>
                    <option value='15:00:00'>15:00:00</option>
                    <option value='15:50:00'>15:50:00</option>
                    <option value='16:40:00'>16:40:00</option>
                    <option value='17:30:00'>17:30:00</option>
                    <option value='18:20:00'>18:20:00</option>
                    <option value='19:10:00'>19:10:00</option>
                    <option value='20:00:00'>20:00:00</option>
                    <option value='20:50:00'>20:50:00</option>
                    <option value='21:40:00'>21:40:00</option>
                  </select>
                </div>
                <div className='eight wide field'>
                  <label>Jam Selesai</label>
                    <select className='ui dropdown' {...jam_selesai}>
                      <option value='07:30:00'>07:30:00</option>
                      <option value='08:20:00'>08:20:00</option>
                      <option value='09:10:00'>09:10:00</option>
                      <option value='10:00:00'>10:00:00</option>
                      <option value='10:50:00'>10:50:00</option>
                      <option value='11:40:00'>11:40:00</option>
                      <option value='12:30:00'>12:30:00</option>
                      <option value='13:20:00'>13:20:00</option>
                      <option value='14:10:00'>14:10:00</option>
                      <option value='15:00:00'>15:00:00</option>
                      <option value='15:50:00'>15:50:00</option>
                      <option value='16:40:00'>16:40:00</option>
                      <option value='17:30:00'>17:30:00</option>
                      <option value='18:20:00'>18:20:00</option>
                      <option value='19:10:00'>19:10:00</option>
                      <option value='20:00:00'>20:00:00</option>
                      <option value='20:50:00'>20:50:00</option>
                      <option value='21:40:00'>21:40:00</option>
                    </select>
                </div>
              </div>
              <div className='field'>
                <label>Kelas</label>
                <select className='ui dropdown' {...kelas}>
                  {kelasOption}
                </select>
              </div>
              <div className='field'>
                <label>Semester</label>
                <div className='fields'>
                  <div className='six wide field'>
                    <select className='ui dropdown' {...semester}>
                      {semesterOption}
                    </select>
                  </div>
                  <div className='six wide field'>
                    <select className='ui dropdown' {...akademik}>
                      {akademikOption}
                    </select>
                  </div>
                  <div className='six wide field'>
                    <select className='ui dropdown' {...ruangan}>
                      {ruanganOption}
                    </select>
                  </div>
                </div>
              </div>
              <div className='fields'>
                <div className='sixteen wide field'>
                  <label>Mata Kuliah</label>
                  <select className='ui dropdown' {...mata_kuliah}>
                    {mataKuliahOption}
                  </select>
                </div>
              </div>
              <div className='field'>
                <label>Dosen</label>
                <select className='ui dropdown' {...dosen}>
                  {dosenOption}
                </select>
              </div>
              <button
                className={this.props.isLoading ? 'ui primary button loading' : 'ui primary button'}
                onClick={this.props.handleSubmit(this.handleSubmit)}>
                Simpan
              </button>
            </form>
            <div className='ui success message'>
              <i className='close icon'></i>
              <div className='header'>
                Berhasil
              </div>
              <p>{this.props.message ? this.props.message : ''}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: form,
  fields
})(EditJadwalForm)
