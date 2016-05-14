import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { getSortedDosen } from '../../redux/modules/kehadiran'
import { filterKehadiran } from '../../redux/modules/kehadiran'

class Kehadiran extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      tipeFilter: ''
    }
  }
  static propTypes = {
    data: PropTypes.object,
    isLoading: PropTypes.bool,
    dispatch: PropTypes.func,
    sortType: PropTypes.string
  }

  sortDosen = () => {
    var sortType = this.props.sortType
    if (sortType === 'asc') {
      sortType = 'desc'
    } else {
      sortType = 'asc'
    }
    this.props.dispatch(getSortedDosen(sortType))
  }

  changeFilterOption = (e) => {
    // this.state.tipeFilter = e.target.value
    this.setState({tipeFilter: e.target.value})
  }

  changeFilterValue = (e) => {
    console.log(e.target.value)
    var filter = {
      option: this.state.tipeFilter,
      val: e.target.value
    }
    this.props.dispatch(filterKehadiran(filter))
  }
  render () {
    var filterOption = []
    var row = []
    var loader = <div className='ui active inverted dimmer'>
      <div className='ui text loader'>Loading</div>
    </div>
    if (this.props.data) {
      var listKehadiran = this.props.data.data
      if(listKehadiran.length < 1) {
        row =<tr><td colSpan='8' className='center aligned'><span>Tidak ada data</span></td></tr>
      }
      for (var i = 0; i < listKehadiran.length; i++) {
        row.push(
          <tr>
            <td>{listKehadiran[i].tanggal}</td>
            <td>{listKehadiran[i].nim}</td>
            <td>{listKehadiran[i].nama_mahasiswa}</td>
            <td>{listKehadiran[i].nama_kelas}</td>
            <td>{listKehadiran[i].mata_kuliah}</td>
            <td>{listKehadiran[i].nama_dosen}</td>
            <td>{listKehadiran[i].nama_ruangan}</td>
            <td>{listKehadiran[i].jam_mulai}</td>
            <td>{listKehadiran[i].jam_presensi}</td>
            <td>{listKehadiran[i].keterlambatan}</td>
            <td>{listKehadiran[i].status}</td>
          </tr>
        )
      }
    }
    console.log(this.state.tipeFilter)
    switch (this.state.tipeFilter) {
      case 'hari':
        filterOption = hariOption
        break
      case 'id_kelas':
        filterOption = kelasOption
        break
      case 'id_ruangan':
        filterOption = ruanganOption
        break
      case 'id_mk':
        filterOption = mataKuliahOption
        break
      case 'id_dosen':
        filterOption = dosenOption
        break
      default:
        filterOption = <option>A</option>
    }
    return (
      <div className='ui main grid'>
        {this.props.isLoading ? loader : ''}
        <div className='sixteen wide stretched column'>
          <div className='ui form'>
            <div className='inline fields'>
              <div className='four wide field'>
                <label>Filter</label>
                <select onChange={this.changeFilterOption.bind(this)} className='ui scrolling dropdown'>
                  <option value=''>Pilih</option>
                  <option value='hari'>Hari</option>
                  <option value='id_kelas'>Kelas</option>
                  <option value='id_ruangan'>Ruangan</option>
                  <option value='id_mk'>Mata Kuliah</option>
                  <option value='id_dosen'>Dosen</option>
                </select>
              </div>
              <div className='eight wide field'>
                <select className={this.state.tipeFilter === '' ? 'ui disabled dropdown' : 'ui dropdown'} onChange={this.changeFilterValue.bind(this)}>
                  <option value='hari'>Pilih</option>
                  {filterOption}
                </select>
              </div>
            </div>
          </div>
        </div>
        <table className='ui very basic striped sortable celled table'>
          <thead>
            <tr>
              <th>TANGGAL</th>
              <th>NIM</th>
              <th>NAMA</th>
              <th>KELAS</th>
              <th>MATA KULIAH</th>
              <th>DOSEN</th>
              <th>RUANGAN</th>
              <th>JAM MASUK</th>
              <th>JAM PRESENSI</th>
              <th>KETERLAMBATAN</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {row}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan='11'>
                <div
                  onClick={this.handleNewData}
                  className='ui left floated primary labeled icon button'>
                  <i className='user icon'></i> Tambah Data
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
      </div>
    )
  }
}

export default Kehadiran
