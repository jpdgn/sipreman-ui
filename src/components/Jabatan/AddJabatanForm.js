import React, { PropTypes } from 'react'
// import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { addJabatan } from '../../redux/modules/jabatan'

const form = 'addJabatanForm'
const fields = ['kode', 'jabatan']

class AddJabatanForm extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    values: PropTypes.object,
    fields: PropTypes.object,
    handleSubmit: PropTypes.func,
    isLoading: PropTypes.bool,
    message: PropTypes.string,
    prodi: PropTypes.object
  }

  componentDidMount () {}

  handleSubmit = () => {
    let { dispatch } = this.props
    var jabatan = {
      kode: this.props.values.kode,
      jabatan: this.props.values.jabatan
    }
    console.log(jabatan)
    dispatch(addJabatan(jabatan))
  }

  render () {
    const {fields: {kode, jabatan}} = this.props
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
                  <label>Jabatan</label>
                  <input
                    {...jabatan}
                    type='text'
                    name='nama_jabatan'
                    placeholder='Nama Jabtan'
                  />
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
})(AddJabatanForm)
