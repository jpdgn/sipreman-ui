import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import AddDosenForm from './AddDosenForm'

class Dosen extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    message: PropTypes.string,
    isLoading: PropTypes.bool,
    jabatan: PropTypes.object
  }

  handleAdd = () => {
    console.log('Add clicked')
  }

  render () {
    var row = []
    var loader = <div className='ui active inverted dimmer'>
      <div className='ui text loader'>Loading</div>
    </div>
    if (this.props.data && this.props.data.data) {
      var listDosen = this.props.data.data
      for (var i = 0; i < listDosen.length; i++) {
        row.push(
          <tr key={i}>
            <td><Link to={'/dosen/' + listDosen[i].nip}>{listDosen[i].nip}</Link></td>
            <td>{listDosen[i].nama_dosen}</td>
            <td>{listDosen[i].email}</td>
            <td>{listDosen[i].jabatan}</td>
          </tr>
        )
      }
    }
    return (
      <div className='ui main grid'>
        {this.props.isLoading ? loader : ''}
        <table className='ui very basic striped sortable celled table'>
          <thead>
            <tr>
              <th>NIP</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Jabatan</th>
            </tr>
          </thead>
          <tbody>
            {row}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan='4'>
                <div
                  className='ui left floated primary labeled icon button'
                  onClick={this.handleAdd}>
                    <i className='user icon'></i>Tambah Data
                </div>
                <div className='ui right floated pagination menu'>
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
        {/* <div className='ui long modal active'>
          <div className='header'>Tambah Data Dosen</div>
          <div className='content'>
            <NewDosenForm
              isLoading={this.props.isLoading}
              message={this.props.message}
              jabatan={this.props.jabatan}/>
          </div>
          <div className='actions'>
            <div className='ui button'>Batal</div>
            <div className='ui green button'>Simpan</div>
          </div>
        </div>*/}
      </div>
    )
  }
}

export default Dosen
