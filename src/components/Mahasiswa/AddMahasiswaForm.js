import React, { PropTypes } from 'react'
// import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { addMahasiswa } from '../../redux/modules/mahasiswa'

const form = 'addMahasiswaForm'
const fields = ['nim', 'nama', 'email', 'kelas', 'noHp', 'tanggal', 'bulan',
'tahun', 'alamatRumah', 'alamatTinggal', 'semester', 'akademik', 'kompensasi', 'deviceId', 'tahunMasuk']

const validate = (values) => {
  const errors = {}
  if (!values.nim) {
    errors.nim = 'NIM tidak boleh kosong'
  }
  if (!values.nama) {
    errors.nama = 'Nama harus diisi'
  }
  if (!values.email) {
    errors.email = 'Email harus diisi'
  }
  if (!values.kelas) {
    errors.kelas = 'Kelas harus diisi'
  }
  if (!values.noHp) {
    errors.noHp = 'No HP harus diisi'
  }
  return errors
}

class AddMahasiswaForm extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    values: PropTypes.object,
    fields: PropTypes.object,
    handleSubmit: PropTypes.func,
    kelas: PropTypes.object,
    semester: PropTypes.object,
    akademik: PropTypes.object,
    isLoading: PropTypes.bool,
    message: PropTypes.string
  }

  componentDidMount () {}

  handleSubmit = () => {
    let { dispatch } = this.props
    var tanggal = this.props.values.tanggal
    var bulan = this.props.values.bulan
    var tahun = this.props.values.tahun
    var tanggalLahir = tahun + '-' + bulan + '-' + tanggal
    var mahasiswa = {
      nim: this.props.values.nim,
      nama_mhs: this.props.values.nama,
      email: this.props.values.email,
      tanggal_lahir: tanggalLahir,
      alamat_rumah: this.props.values.alamatRumah,
      alamat_tinggal: this.props.values.alamatRumah,
      tahun_masuk: this.props.values.tahunMasuk,
      no_hp: this.props.values.noHp,
      kompensasi: this.props.values.kompensasi,
      id_kelas: this.props.values.kelas,
      id_semester: this.props.values.semester,
      id_akademik: this.props.values.akademik,
      device_id: this.props.values.deviceId
    }
    console.log(mahasiswa)
    dispatch(addMahasiswa(mahasiswa))
  }

  render () {
    const {fields: {nim, nama, email, kelas, noHp, tanggal, bulan, tahun, alamatRumah,
     alamatTinggal, semester, akademik, kompensasi, deviceId, tahunMasuk}} = this.props
    var kelasData = this.props.kelas
    var semesterData = this.props.semester
    var akademikData = this.props.akademik
    var kelasOption = []
    var tanggalLahirOption = []
    var tahunLahirOption = []
    var tahunMasukOption = []
    var semesterOption = []
    var akademikOption = []
    for (var i = 1; i <= 31; i++) {
      tanggalLahirOption.push(<option value={i < 10 ? '0' + i : i} key={i}>{i < 10 ? '0' + i : i}</option>)
    }
    for (var j = 1950; j <= 1995; j++) {
      tahunLahirOption.push(<option value={j} key={j}>{j}</option>)
    }
    for (var k = 2011; k <= 2016; k++) {
      tahunMasukOption.push(<option value={k} key={k}>{k}</option>)
    }
    for (var x = 0; x < kelasData.data.length; x++) {
      kelasOption.push(<option value={kelasData.data[x].kode}>{kelasData.data[x].kelas}</option>)
    }
    for (var y = 0; y < semesterData.data.length; y++) {
      semesterOption.push(<option value={semesterData.data[y].kode}>{semesterData.data[y].semester}</option>)
    }
    for (var z = 0; z < akademikData.data.length; z++) {
      akademikOption.push(<option value={akademikData.data[z].kode}>{akademikData.data[z].akademik}</option>)
    }
    return (
      <div className='ui main grid'>
        <div className='sixteen wide stretched column'>
          <div className='ui segment'>
            <form className='ui form' onSubmit={this.handleSubmit}>
              <h3 className='ui dividing header'>Informasi Pendidikan</h3>
              <div className='fields'>
                <div className={'eight wide field' + (nim.error && nim.touched ? ' error' : '')}>
                  <label>NIM</label>
                  <input
                    {...nim}
                    type='text'
                    name='NIM'
                    placeholder='NIM'
                  />
                  {nim.touched && nim.error && <span className='ui pointing red basic label'>{nim.error}</span>}
                </div>
                <div className={'eight wide field' + (nama.error && nama.touched ? ' error' : '')}>
                  <label>Nama</label>
                  <input
                    {...nama}
                    type='text'
                    name='nama'
                    placeholder='Nama'
                  />
                  {nama.touched && nama.error && <span className='ui pointing red basic label'>{nama.error}</span>}
                </div>
              </div>
              <div className='fields'>
                <div className={'eight wide field' + (email.error && email.touched ? 'error' : '')}>
                  <label>Email</label>
                  <input
                    {...email}
                    type='text'
                    name='email'
                    placeholder='Email'
                  />
                  {email.touched && email.error && <span className='ui pointing red basic label'>{email.error}</span>}
                </div>
                <div className={'four wide field' + (kelas.error && kelas.touched ? 'error' : '')}>
                  <label>Kelas</label>
                  <select
                    className='ui search dropdown'
                    {...kelas}>
                    {kelasOption}
                  </select>
                  {kelas.touched && kelas.error && <span className='ui pointing red basic label'>{kelas.error}</span>}
                </div>
                <div className='four wide field'>
                  <label>Tahun Masuk</label>
                  <select
                    className='ui search dropdown'
                    {...tahunMasuk}>
                    {tahunMasukOption}
                  </select>
                </div>
              </div>
              <div className='fields'>
                <div className='six wide field'>
                  <label>Semester</label>
                  <select {...semester}>
                    {semesterOption}
                  </select>
                </div>
                <div className='six wide field'>
                  <label>Akademik</label>
                  <select {...akademik}>
                    {akademikOption}
                  </select>
                </div>
                <div className='four wide field'>
                  <label>Kompensasi</label>
                  <input
                    {...kompensasi}
                    type='text'
                    name='kompensasi'
                    placeholder='Kompensasi' />
                </div>
              </div>
              <h3 className='ui dividing header'>Informasi Pribadi</h3>
              <div className={'field' + (noHp.error && noHp.touched ? 'error' : '')}>
                <label>No HP</label>
                <input
                  {...noHp}
                  type='text'
                  name='no_hp'
                  placeholder='No HP'
                />
                {noHp.touched && noHp.error && <span className='ui pointing red basic label'>{noHp.error}</span>}
              </div>
              <div className='field'>
                <label>Tanggal Lahir</label>
                <div className='fields'>
                  <div className='six wide field'>
                    <select className='ui dropdown' {...tanggal}>
                      {tanggalLahirOption}
                    </select>
                  </div>
                  <div className='six wide field'>
                    <select className='ui dropdown' {...bulan}>
                      <option value=''>Bulan</option>
                      <option value='01'>Januari</option>
                      <option value='02'>Februari</option>
                      <option value='03'>Maret</option>
                      <option value='04'>April</option>
                      <option value='05'>Mei</option>
                      <option value='06'>Juni</option>
                      <option value='07'>Juli</option>
                      <option value='08'>Agustus</option>
                      <option value='09'>September</option>
                      <option value='10'>Oktober</option>
                      <option value='11'>November</option>
                      <option value='12'>Desember</option>
                    </select>
                  </div>
                  <div className='six wide field'>
                    <select className='ui dropdown' {...tahun}>
                      {tahunLahirOption}
                    </select>
                  </div>
                </div>
              </div>
              <div className='fields'>
                <div className='sixteen wide field'>
                  <label>Alamat Rumah</label>
                  <textarea placeholder='Alamat Rumah' rows='3' {...alamatRumah}>
                  </textarea>
                </div>
              </div>
              <div className='field'>
                <label>Device ID</label>
                <input
                  {...deviceId}
                  type='text'
                  name='device_id'
                  placeholder='Device ID'
                />
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
  fields,
  validate
})(AddMahasiswaForm)
