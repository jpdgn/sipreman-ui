import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { getSortedDosen } from '../../redux/modules/jadwal'
import { filterJadwal } from '../../redux/modules/jadwal'

class Jadwal extends React.Component {
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
    this.props.dispatch(filterJadwal(filter))
  }
  render () {
    var filterOption
    var hariData = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']
    var kelasData = this.props.kelas
    var ruanganData = this.props.ruangan
    var mataKuliahData = this.props.mk
    var dosenData = this.props.dosen
    var hariOption = []
    var kelasOption = []
    var ruanganOption = []
    var mataKuliahOption = []
    var dosenOption = []
    for (var a = 0; a < kelasData.data.length; a++) {
      kelasOption.push(<option value={kelasData.data[a].kode}>{kelasData.data[a].kelas}</option>)
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
    var row = []
    var days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']
    var loader = <div className='ui active inverted dimmer'>
      <div className='ui text loader'>Loading</div>
    </div>
    if (this.props.data) {
      var listJadwal = this.props.data.data
      if(listJadwal.length < 1) {
        row =<tr><td colSpan='8' className='center aligned'><span>Tidak ada data</span></td></tr>
      }
      for (var i = 0; i < listJadwal.length; i++) {
        row.push(
          <tr>
            <td><Link to={'jadwal/' + (listJadwal[i].kode)}>{listJadwal[i].kode}</Link></td>
            <td>{days[listJadwal[i].hari - 1]}</td>
            <td>{listJadwal[i].kelas}</td>
            <td>{listJadwal[i].ruangan}</td>
            <td>{listJadwal[i].mata_kuliah}</td>
            <td>{listJadwal[i].nama_dosen}</td>
            <td>{listJadwal[i].jam_mulai}</td>
            <td>{listJadwal[i].jam_selesai}</td>
          </tr>
        )
      }
    }
    console.log(this.state.tipeFilter)
    // if (this.state.tipeFilter == 'hari') {
    //   filterOption = hariOption
    // } else {
    //   filterOption = <option>A</option>
    // }
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
              <th>KODE JADWAL</th>
              <th>HARI</th>
              <th>KELAS</th>
              <th>RUANGAN</th>
              <th>MATA KULIAH</th>
              <th onClick={this.sortDosen} className={'sorted ' + (this.props.sortType === 'asc'
              ? 'ascending' : this.props.sortType === 'desc' ? 'descending' : '')}>DOSEN</th>
              <th>JAM MULAI</th>
              <th>JAM SELESAI</th>
            </tr>
          </thead>
          <tbody>
            {row}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan='8'>
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

export default Jadwal
