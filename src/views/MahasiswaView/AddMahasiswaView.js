import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import TopMenu from '../../components/Menu/TopMenu'
import MahasiswaForm from '../../components/Mahasiswa/MahasiswaForm'

const mapStateToProps = (state) => ({
  isLoading: state.mahasiswa.isLoading,
  message: state.mahasiswa.message
})

export class AddMahasiswaView extends Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    params: PropTypes.string
  }

  render () {
    return (
      <div>
        <TopMenu />
        <div className='row'>
          <div className='ui grid container'>
            <MahasiswaForm
              isLoading={this.props.isLoading}
              message={this.props.message}/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(AddMahasiswaView)
