import React, { PropTypes } from 'react'
// import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { addKelas } from '../../redux/modules/kelas'

const form = 'newKelasForm'
const fields = ['kode', 'kelas', 'prodi']

class NewKelasForm extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    values: PropTypes.object,
    fields: PropTypes.object,
    handleSubmit: PropTypes.func,
    isLoading: PropTypes.bool,
    prodi: PropTypes.object
  }

  componentDidMount () {}

  handleSubmit = () => {
    let { dispatch } = this.props
    var kelas = {
      kode: this.props.values.kode,
      kelas: this.props.values.kelas,
      id_prodi: this.props.values.prodi
    }
    console.log(kelas)
    dispatch(addKelas(kelas))
  }

  render () {
    const {fields: {kode, kelas, prodi}} = this.props
    var prodiData = this.props.prodi
    var prodiOption = []

    for (var x = 0; x < prodiData.data.length; x++) {
      prodiOption.push(<option value={prodiData.data[x].kode}>{prodiData.data[x].prodi.toUpperCase()}</option>)
    }
    return (
      <div>
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
            <label>Kelas</label>
            <input
              {...kelas}
              type='text'
              name='nama_kelas'
              placeholder='Nama Kelas'
            />
          </div>
        </div>
        <div className='fields'>
          <div className='sixteen wide field'>
            <label>Prodi</label>
            <select
              className='ui search dropdown'
              {...prodi}>
              {prodiOption}
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
    )
  }
}

export default reduxForm({
  form: form,
  fields
})(NewKelasForm)
