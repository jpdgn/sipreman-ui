import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class Kelas extends React.Component {
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
      var listKelas = this.props.data.data
      var pageTotal = Math.ceil(listKelas.length / 5)
      var page = []
      for (var a = 0; a < pageTotal; a++) {
        page.push(
          <a className='item'>{a + 1}</a>
        )
      }
      console.log(pageTotal)
      for (var i = 0; i < listKelas.length; i++) {
        row.push(
          <tr>
            <td><Link to={'kelas/' + (listKelas[i].kode)}>{listKelas[i].kode}</Link></td>
            <td>{listKelas[i].kelas.toUpperCase()}</td>
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
              <th>KODE KELAS</th>
              <th>NAMA KELAS</th>
            </tr>
          </thead>
          <tbody>
            {row}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan='2'>
                <div
                  onClick={this.handleNewData}
                  className='ui left floated primary labeled icon button'>
                  <i className='user icon'></i> Tambah Data
                </div>
                <div className='ui right floated pagination menu'>
                  <a className='icon item'>
                    <i className='left chevron icon'></i>
                  </a>
                  {page}
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

export default Kelas
