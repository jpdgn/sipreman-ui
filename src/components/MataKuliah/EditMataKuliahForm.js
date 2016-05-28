import React, { PropTypes } from 'react'
// import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { updateMk } from '../../redux/modules/mk'

const form = 'editMataKuliahForm'
const fields = ['kode', 'mata_kuliah', 'bobot']

class EditMataKuliahForm extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    values: PropTypes.object,
    fields: PropTypes.object,
    handleSubmit: PropTypes.func,
    isLoading: PropTypes.bool,
    message: PropTypes.string
  }

  componentDidMount () {}

  handleSubmit = () => {
    let { dispatch } = this.props
    var kode = this.props.values.kode
    var mk = {
      mata_kuliah: this.props.values.mata_kuliah,
      bobot: this.props.values.bobot
    }
    console.log(mk)
    dispatch(updateMk(kode, mk))
  }

  render () {
    const {fields: {kode, mata_kuliah, bobot}} = this.props
    return (
      <div className='ui main grid'>
        <div className='sixteen wide stretched column'>
          <div className='ui segment'>
            <form className='ui form' onSubmit={this.handleSubmit}>
              <h3 className='ui dividing header'>Informasi Pendidikan</h3>
              <div className='fields'>
                <div className='eight wide field'>
                  <label>Kode Mata Kuliah</label>
                  <input
                    {...kode}
                    disabled
                    type='text'
                    name='kode'
                    placeholder='Kode Mata Kuliah'
                  />
                </div>
              </div>
              <div className='fields'>
                <div className='eight wide field'>
                  <label>Mata Kuliah</label>
                  <input
                    {...mata_kuliah}
                    type='text'
                    name='mata_kuliah'
                    placeholder='Mata Kuliah'
                  />
                </div>
                <div className='eight wide field'>
                  <label>Bobot</label>
                  <input
                    {...bobot}
                    type='text'
                    name='bobot'
                    placeholder='Bobot Mata Kuliah'
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
})(EditMataKuliahForm)
