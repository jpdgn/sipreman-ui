import React from 'react'
// import { Link } from 'react-router'

class Menu extends React.Component {
  render () {
    return (
      <div className='ui stackable menu'>
        <div className='ui container'>
          <a className='item'>
            <i className='home icon'></i> Home
          </a>

          <div className='right item'>
            Logged in as
            <div className='ui simple inline dropdown item'>
              <div className='text'>
                Nama
              </div>
              <i className='dropdown icon'></i>
              <div className='menu'>
                <a className='item'>
                  <i className='sign out icon'>
                  </i>Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
