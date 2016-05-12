import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class Ruangan extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    isLoading: PropTypes.bool
  }
  render () {
    var row = []
    var loader = <div className='ui active inverted dimmer'>
      <div className='ui text loader'>Loading</div>
    </div>
    if (this.props.data) {
      var listRuangan = this.props.data.data
      for (var i = 0; i < listRuangan.length; i++) {
        row.push(
          <tr>
            <td><Link to={'ruangan/' + (listRuangan[i].kode)}>{listRuangan[i].kode}</Link></td>
            <td>{listRuangan[i].ruangan}</td>
            <td>{listRuangan[i].lantai}</td>
            <td>{listRuangan[i].status}</td>
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
              <th>KODE RUANGAN</th>
              <th>NAMA RUANGAN</th>
              <th>LANTAI</th>
              <th>STATUS RUANGAN</th>
            </tr>
          </thead>
          <tbody>
            {row}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan='4'>
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

export default Ruangan
