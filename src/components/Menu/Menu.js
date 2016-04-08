import React from 'react'
import { Link } from 'react-router'

class Menu extends React.Component {
  render () {
    return (
      <div className='four wide column'>
        <div className='ui secondary vertical pointing menu'>
          <Link to='/mahasiswa' className='item' activeClassName='active'>
            Mahasiswa
          </Link>
          <Link to='/dosen' className='item' activeClassName='active'>
            Dosen
          </Link>
        </div>
      </div>
    )
  }
}

export default Menu
