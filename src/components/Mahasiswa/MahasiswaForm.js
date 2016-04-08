import React, { PropTypes } from 'react'
// import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { updateMahasiswa } from '../../redux/modules/mahasiswa'

const form = 'updateMahasiswaForm'
const fields = ['nim', 'nama', 'email', 'kelas', 'noHp', 'tanggal', 'bulan',
'tahun', 'alamatRumah', 'alamatTinggal', 'deviceId']

class MahasiswaForm extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    values: PropTypes.object,
    fields: PropTypes.object,
    handleSubmit: PropTypes.func
  }

  componentDidMount() {
    $('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;
  }

  handleSubmit = () => {
    let { dispatch } = this.props
    var tanggal = this.props.values.tanggal
    var bulan = this.props.values.bulan
    var tahun = this.props.values.tahun
    var tanggalLahir = tahun + '-' + bulan + '-' + tanggal
    var nim = this.props.values.nim
    var mahasiswa = {
      nim: this.props.values.nim,
      nama: this.props.values.nama,
      email: this.props.values.email,
      id_kelas: this.props.values.kelas,
      no_hp: this.props.values.noHp,
      tanggal_lahir: tanggalLahir,
      alamat_rumah: this.props.values.alamatRumah,
      alamat_tinggal: this.props.values.alamatTinggal,
      device_id: this.props.values.deviceId
    }
    console.log(mahasiswa)
    dispatch(updateMahasiswa(nim, mahasiswa))
  }

  render () {
    const {fields: {nim, nama, email, kelas, noHp, tanggal, bulan, tahun, alamatRumah,
      alamatTinggal, deviceId}} = this.props
    var tanggalLahirOption = []
    var tahunLahirOption = []
    for (var i = 1; i <= 31; i++) {
      tanggalLahirOption.push(<option value={i} key={i}>{i}</option>)
    }
    for (var j = 1950; j <= 1995; j++) {
      tahunLahirOption.push(<option value={j} key={j}>{j}</option>)
    }
    return (
      <div className='ten wide stretched column'>
        <div className='ui segment'>
          <form className='ui form' onSubmit={this.handleSubmit}>
            <h3 className='ui dividing header'>Informasi Pendidikan</h3>
            <div className='fields'>
              <div className='eight wide field'>
                <label>NIM</label>
                <input
                  {...nim}
                  disabled
                  type='text'
                  name='NIM'
                  placeholder='NIM'
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
              <div className='eight wide field'>
                <label>Kelas</label>
                <select
                  className='ui search dropdown'
                  {...kelas}>
                  <option value='TIA'>TI A</option>
                  <option value='TIB'>TI B</option>
                  <option value='TKJA'>TKJ A</option>
                  <option value='TKJB'>TKJ B</option>
                  <option value='TMJA'>TMJ A</option>
                  <option value='TMJB'>TMJ B</option>
                </select>
              </div>
            </div>
            <h3 className='ui dividing header'>Informasi Pribadi</h3>
            <div className='field'>
              <label>No HP</label>
              <input
                {...noHp}
                type='text'
                name='no_hp'
                placeholder='No HP'
              />
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
                    <option value='1'>Januari</option>
                    <option value='2'>Februari</option>
                    <option value='3'>Maret</option>
                    <option value='4'>April</option>
                    <option value='5'>Mei</option>
                    <option value='6'>Juni</option>
                    <option value='7'>Juli</option>
                    <option value='8'>Agustus</option>
                    <option value='9'>September</option>
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
              <div className="header">
                Berhasil
              </div>
              <p>{this.props.message ? this.props.message : ''}</p>
            </div>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: form,
  fields
})(MahasiswaForm)
