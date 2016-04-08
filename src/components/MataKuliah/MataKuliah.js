import React, { PropTypes } from 'react'

class MataKuliah extends React.Component {
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
      var listMk = this.props.data.data
      for (var i = 0; i < listMk.length; i++) {
        row.push(
          <tr>
            <td>{listMk[i].kode_mk}</td>
            <td>{listMk[i].nama_mk}</td>
            <td>{listMk[i].bobot}</td>
          </tr>
        )
      }
    }
    return (
      <div className='twelve wide stretched column'>
        {this.props.isLoading ? loader : ''}
        <table className='ui celled table'>
          <thead>
            <tr>
              <th>KODE MATA KULIAH</th>
              <th>NAMA MATA KULIAH</th>
              <th>BOBOT SKS</th>
            </tr>
          </thead>
          <tbody>
            {row}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan='3'>
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

export default MataKuliah
