import React, { PropTypes } from 'react'
// import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { updateRuangan } from '../../redux/modules/ruangan'

const form = 'editRuanganForm'
const fields = ['kode', 'ruangan', 'lantai', 'lat_a', 'lat_b', 'long_a', 'long_b', 'status']

class EditRuanganForm extends React.Component {
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
    var ruangan = {
      ruangan: this.props.values.ruangan,
      lantai: this.props.values.lantai,
      latitude_a: this.props.values.lat_a,
      latitude_b: this.props.values.lat_b,
      longitude_a: this.props.values.long_a,
      longitude_b: this.props.values.long_b,
      status: this.props.values.status
    }
    console.log(ruangan)
    dispatch(updateRuangan(kode, ruangan))
  }

  render () {
    const {fields: {kode, ruangan, lantai, lat_a, lat_b,
    long_a, long_b, status}} = this.props
    return (
      <div className='ui main grid'>
        <div className='sixteen wide stretched column'>
          <div className='ui segment'>
            <form className='ui form' onSubmit={this.handleSubmit}>
              <h3 className='ui dividing header'>Informasi Pendidikan</h3>
              <div className='fields'>
                <div className='four wide field'>
                  <label>Kode</label>
                  <input
                    {...kode}
                    disabled
                    type='text'
                    name='kode'
                    placeholder='Kode Kelas'
                  />
                </div>
                <div className='four wide field'>
                  <label>Ruangan</label>
                  <input
                    {...ruangan}
                    type='text'
                    name='ruangan'
                    placeholder='Ruangan'
                  />
                </div>
                <div className='four wide field'>
                  <label>Lantai</label>
                  <input
                    {...lantai}
                    type='text'
                    name='lantai'
                    placeholder='Lantai'
                  />
                </div>
                <div className='four wide field'>
                  <label>Status</label>
                  <input
                    {...status}
                    type='text'
                    name='status'
                    placeholder='Status'
                  />
                </div>
              </div>
              <div className='fields'>
                <div className='four wide field'>
                  <label>Latitude A</label>
                  <input
                    {...lat_a}
                    type='text'
                    name='lat_a'
                    placeholder='Latitude'
                  />
                </div>
                <div className='four wide field'>
                  <label>Latitude B</label>
                  <input
                    {...lat_b}
                    type='text'
                    name='lat_b'
                    placeholder='Latitude'
                  />
                </div>
                <div className='four wide field'>
                  <label>Longitude A</label>
                  <input
                    {...long_a}
                    type='text'
                    name='long_a'
                    placeholder='Longitude'
                  />
                </div>
                <div className='four wide field'>
                  <label>Longitude B</label>
                  <input
                    {...long_b}
                    type='text'
                    name='long_b'
                    placeholder='Longitude'
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
})(EditRuanganForm)
