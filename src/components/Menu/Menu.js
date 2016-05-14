import React from 'react'
import { Link } from 'react-router'

class Menu extends React.Component {
  render () {
    return (
      <div className='ui left fixed vertical inverted menu' style={{'marginTop': '48px'}}>
        <Link to='/mahasiswa' className='item' activeClassName='active'>
          Mahasiswa
        </Link>
        <Link to='/dosen' className='item' activeClassName='active'>
          Dosen
        </Link>
        <Link to='/kelas' className='item' activeClassName='active'>
          Kelas
        </Link>
        <Link to='/mata-kuliah' className='item' activeClassName='active'>
          Mata Kuliah
        </Link>
        <Link to='/ruangan' className='item' activeClassName='active'>
          Ruangan
        </Link>
        <Link to='/prodi' className='item' activeClassName='active'>
          Prodi
        </Link>
        <Link to='/jurusan' className='item' activeClassName='active'>
          Jurusan
        </Link>
        <Link to='/jabatan' className='item' activeClassName='active'>
          Jabatan
        </Link>
        <Link to='/jadwal' className='item' activeClassName='active'>
          Jadwal
        </Link>
        <Link to='/kehadiran' className='item' activeClassName='active'>
          Kehadiran
        </Link>
      </div>
    )
  }
}

export default Menu
