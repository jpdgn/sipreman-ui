import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { nimOnDelete } from '../../redux/modules/mahasiswa'

const form = 'formMahasiswa'
const fields = ['nimOnDelete']
const validate = (values) => {
  const errors = {}
  if (values.nimOnDelete !== '4312010030') {
    errors.nimOnDelete = 'Tidak valid'
  }
  return errors
}

class Mahasiswa extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    isLoading: PropTypes.bool,
    dispatch: PropTypes.func,
    fields: PropTypes.object
  }
  handleHapusData = (nim) => {
    let { dispatch } = this.props
    $('.ui.modal')
    .modal('show')
    console.log(nim)
    dispatch(nimOnDelete(nim))
  }

  render () {
    const {fields: {nimOnDelete}} = this.props
    var row = []
    var loader = <div className='ui active dimmer'>
      <div className='ui text loader'>Loading</div>
    </div>
    if (this.props.data && this.props.data.data) {
      var listMahasiswa = this.props.data.data
      for (var i = 0; i < listMahasiswa.length; i++) {
        row.push(
          <tr key={i}>
            <td><Link to={'/mahasiswa/' + listMahasiswa[i].nim}>{listMahasiswa[i].nim}</Link></td>
            <td>{listMahasiswa[i].nama_mhs}</td>
            <td>{listMahasiswa[i].email}</td>
            <td>{listMahasiswa[i].kelas}</td>
            <td>{listMahasiswa[i].akademik}</td>
            <td>{listMahasiswa[i].semester}</td>
            <td><a onClick={this.handleHapusData.bind(this, listMahasiswa[i].nim)}><i className='trash icon' /></a></td>
          </tr>
        )
      }
    }
    var tanggalLahirOption = []
    var tahunLahirOption = []
    for (var a = 1; a <= 31; a++) {
      tanggalLahirOption.push(<option value={a} key={a}>{a}</option>)
    }
    for (var j = 1950; j <= 1995; j++) {
      tahunLahirOption.push(<option value={j} key={j}>{j}</option>)
    }
    var fontStyle = {
      color: 'white'
    }
    return (
      <div className='ui main grid'>
        {this.props.isLoading ? loader : ''}
        <table className='ui very basic sortable striped celled table'>
          <thead>
            <tr>
              <th>NIM</th>
              <th className='sorted ascending'>Nama</th>
              <th>Email</th>
              <th>Kelas</th>
              <th>Akademik</th>
              <th>Semester</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {row}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan='7'>
                <div
                  onClick={this.handleNewData}>
                  <Link className='ui left floated primary labeled icon button' style={fontStyle}
                    to='add/mahasiswa'><i className='user icon'></i>Tambah Data</Link>
                </div>
                <div
                  className='ui right floated pagination menu'>
                  <a className='icon item'>
                    <i className='left chevron icon'></i>
                  </a>
                  <a className='item'>1</a>
                  <a className='item'>2</a>
                  <a className='item'>3</a>
                  <a className='item'>4</a>
                  <a className='icon item'>
                    <i className='right chevron icon'></i>
                  </a>
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
        <div className='ui modal'>
          <div className='header'>
            Hapus Data
          </div>
          <div className='content'>
            <div>Anda yakin ingin menghapus data mahasiswa dengan NIM ?</div>
            <div className={'ui input error' + (nimOnDelete.error ? 'danger' : '')}>
              <input
                {...nimOnDelete}
                type='text'
                placeholder='Masukkan NIM' />
                {nimOnDelete.error && <span className='ui red'>{nimOnDelete.error}</span>}
            </div>
          </div>
          <div className='actions'>
            <div className='ui black deny button'>
              Batal
            </div>
            <div className='ui positive right labeled icon button'>
              Hapus
              <i className='checkmark icon'></i>
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
})(Mahasiswa)
