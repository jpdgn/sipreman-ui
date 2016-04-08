import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Menu from '../../components/Menu/Menu'
import TopMenu from '../../components/Menu/TopMenu'
import MahasiswaForm from '../../components/Mahasiswa/MahasiswaForm'

import { getMahasiswaDataByNim } from '../../redux/modules/mahasiswa'

const mapStateToProps = (state) => ({
  data: state.mahasiswa.data,
  isLoading: state.mahasiswa.isLoading,
  message: state.mahasiswa.message
})

export class MahasiswaEditView extends Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    params: PropTypes.string
  }

  componentWillMount () {
    this.props.dispatch(getMahasiswaDataByNim(this.props.params.nim))
  }
  render () {
    return (
      <div>
        <TopMenu />
        <div className='row'>
          <div className='ui grid'>
            <Menu />
            <MahasiswaForm
              data={this.props.data}
              isLoading={this.props.isLoading}
              message={this.props.message}/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(MahasiswaEditView)
