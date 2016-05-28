import React, { PropTypes } from 'react'
// import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { updateProdi } from '../../redux/modules/prodi'

const form = 'editProdiForm'
const fields = ['kode', 'prodi', 'jurusan']

class EditProdiForm extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    values: PropTypes.object,
    fields: PropTypes.object,
    handleSubmit: PropTypes.func,
    isLoading: PropTypes.bool,
    message: PropTypes.string,
    jurusan: PropTypes.object
  }

  componentDidMount () {}

  handleSubmit = () => {
    let { dispatch } = this.props
    var kode = this.props.values.kode
    var prodi = {
      prodi: this.props.values.prodi,
      id_jurusan: this.props.values.jurusan
    }
    console.log(prodi)
    dispatch(updateProdi(kode, prodi))
  }

  render () {
    const {fields: {kode, prodi, jurusan}} = this.props
    var jurusanData = this.props.jurusan
    var jurusanOption = []
    for (var x = 0; x < jurusanData.data.length; x++) {
      jurusanOption.push(<option value={jurusanData.data[x].kode}>{jurusanData.data[x].jurusan.toUpperCase()}</option>)
    }
    return (
      <div className='ui main grid'>
        <div className='sixteen wide stretched column'>
          <div className='ui segment'>
            <form className='ui form' onSubmit={this.handleSubmit}>
              <h3 className='ui dividing header'>Informasi Pendidikan</h3>
              <div className='fields'>
                <div className='eight wide field'>
                  <label>Kode</label>
                  <input
                    {...kode}
                    type='text'
                    name='kode'
                    placeholder='Kode Kelas'
                  />
                </div>
                <div className='eight wide field'>
                  <label>Prodi</label>
                  <input
                    {...prodi}
                    type='text'
                    name='nama_prodi'
                    placeholder='Nama Prodi'
                  />
                </div>
              </div>
              <div className='fields'>
                <div className='sixteen wide field'>
                  <label>Jurusan</label>
                  <select
                    className='ui search dropdown'
                    {...jurusan}>
                    {jurusanOption}
                  </select>
                </div>
              </div>
              <button
                className={this.props.isLoading ? 'ui primary button loading' : 'ui primary button'}
                onClick={this.props.handleSubmit(this.handleSubmit)}>
                Simpan
              </button>
            </form>
            <div className='ui success message'>
              <i className='close icon'></i>
              <div className='header'>
                Berhasil
              </div>
              <p>{this.props.message ? this.props.message : ''}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: form,
  fields
})(EditProdiForm)
