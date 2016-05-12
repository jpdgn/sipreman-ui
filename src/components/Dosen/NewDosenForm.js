import React, { PropTypes } from 'react'
// import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { addDosen } from '../../redux/modules/dosen'

const form = 'newDosenForm'
const fields = ['nip', 'nama', 'email', 'jabatan', 'noHp', 'tanggal', 'bulan',
'tahun', 'alamatRumah', 'alamatTinggal', 'deviceId']

class NewDosenForm extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    values: PropTypes.object,
    fields: PropTypes.object,
    handleSubmit: PropTypes.func,
    isLoading: PropTypes.bool,
    message: PropTypes.string,
    jabatan: PropTypes.object
  }

  componentDidMount () {}

  handleSubmit = () => {
    let { dispatch } = this.props
    var tanggal = this.props.values.tanggal
    var bulan = this.props.values.bulan
    var tahun = this.props.values.tahun
    var tanggalLahir = tahun + '-' + bulan + '-' + tanggal
    var dosen = {
      nip: this.props.values.nip,
      nama_dosen: this.props.values.nama,
      email: this.props.values.email,
      id_jabatan: this.props.values.jabatan,
      no_hp: this.props.values.noHp,
      tanggal_lahir: tanggalLahir,
      alamat_rumah: this.props.values.alamatRumah,
      alamat_tinggal: this.props.values.alamatTinggal,
      device_id: this.props.values.deviceId
    }
    console.log(dosen)
    this.props.dispatch(addDosen(dosen))
  }

  render () {
    const {fields: {nip, nama, email, jabatan, noHp, tanggal, bulan, tahun, alamatRumah,
     alamatTinggal, deviceId}} = this.props
    var jabatanData = this.props.jabatan
    var tanggalLahirOption = [<option value=''>Pilih Tanggal</option>]
    var tahunLahirOption = [<option value=''>Pilih Tahun</option>]
    var tahunMasukOption = [<option value=''>Pilih Tahun Masuk</option>]
    var jabatanOption = [<option value=''>Pilih Jabatan</option>]
    for (var i = 1; i <= 31; i++) {
      tanggalLahirOption.push(<option value={i < 10 ? '0' + i : i} key={i}>{i < 10 ? '0' + i : i}</option>)
    }
    for (var j = 1950; j <= 1995; j++) {
      tahunLahirOption.push(<option value={j} key={j}>{j}</option>)
    }
    for (var k = 2011; k <= 2016; k++) {
      tahunMasukOption.push(<option value={k} key={k}>{k}</option>)
    }
    for (var x = 0; x < jabatanData.data.length; x++) {
      jabatanOption.push(<option value={jabatanData.data[x].kode}>{jabatanData.data[x].jabatan.toUpperCase()}</option>)
    }
    return (
        <div>
          <form className='ui form' onSubmit={this.handleSubmit}>
            <h3 className='ui dividing header'>Informasi Pendidikan</h3>
            <div className='fields'>
              <div className='eight wide field'>
                <label>NIM</label>
                <input
                  {...nip}
                  type='text'
                  name='NIP'
                  placeholder='NIP'
                />
              </div>
              <div className='eight wide field'>
                <label>Nama</label>
                <input
                  {...nama}
                  type='text'
                  name='nama'
                  placeholder='Nama'
                />
              </div>
            </div>
            <div className='fields'>
              <div className='eight wide field'>
                <label>Email</label>
                <input
                  {...email}
                  type='text'
                  name='email'
                  placeholder='Email'
                />
              </div>
              <div className='four wide field'>
                <label>Jabatan</label>
                <select
                  className='ui search dropdown'
                  {...jabatan}>
                  {jabatanOption}
                </select>
              </div>
            </div>
            <h3 className='ui dividing header'>Informasi Pribadi</h3>
            <div className='fields'>
              <div className='sixteen wide field'>
                <label>No HP</label>
                <input
                  {...noHp}
                  type='text'
                  name='no_hp'
                  placeholder='No HP'
                />
              </div>
            </div>
            <div className='fields'>
              <div className='six wide field'>
                <label>Tanggal Lahir</label>
                <select className='ui dropdown' {...tanggal}>
                  {tanggalLahirOption}
                </select>
              </div>
              <div className='six wide field'>
                <label>Bulan Lahir</label>
                <select className='ui dropdown' {...bulan}>
                  <option value=''>Pilih Bulan</option>
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
                <label>Tahun Lahir</label>
                <select className='ui dropdown' {...tahun}>
                  {tahunLahirOption}
                </select>
              </div>
            </div>
            <div className='fields'>
              <div className='eight wide field'>
                <label>Alamat Rumah</label>
                <textarea placeholder='Alamat Rumah' rows='3' {...alamatRumah}>
                </textarea>
              </div>
              <div className='eight wide field'>
                <label>Alamat Tinggal</label>
                <textarea placeholder='Alamat Tinggal' rows='3' {...alamatTinggal}>
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
    )
  }
}

export default reduxForm({
  form: form,
  fields
})(NewDosenForm)
