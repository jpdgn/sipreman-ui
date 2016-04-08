import React, { PropTypes } from 'react'

class Dosen extends React.Component {
  static propTypes = {
    data: PropTypes.object
  }
  render () {
    var row = []
    var listDosen = this.props.data.data
    for (var i = 0; i < listDosen.length; i++) {
      row.push(
        <tr>
          <td>{listDosen[i].nip}</td>
          <td>{listDosen[i].nama}</td>
          <td>{listDosen[i].email}</td>
          <td>{listDosen[i].jabatan}</td>
        </tr>
      )
    }
    return (
      <div className='twelve wide stretched column'>
        <table className='ui celled table'>
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

export default Dosen
