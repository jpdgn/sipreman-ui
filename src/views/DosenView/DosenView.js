import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Menu from '../../components/Menu/Menu'
import TopMenu from '../../components/Menu/TopMenu'
import Dosen from '../../components/Dosen/Dosen'

import { getDosen } from '../../redux/modules/dosen'
import { getJabatan } from '../../redux/modules/jabatan'

const mapStateToProps = (state) => ({
  data: state.dosen.data,
  isLoading: state.dosen.isLoadingData,
  message: state.dosen.message,
  jabatan: state.jabatan.data
})

export class DosenView extends Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    isLoading: PropTypes.bool,
    message: PropTypes.string,
    jabatan: PropTypes.object
  }

  componentWillMount () {
    this.props.dispatch(getDosen())
    this.props.dispatch(getJabatan())
  }
  render () {
    return (
      <div>
        <TopMenu/>
        <div className='row'>
          <div className='ui grid container'>
            <Menu/>
            <Dosen
              data={this.props.data}
              message={this.props.message}
              isLoading={this.props.isLoading}
              jabatan={this.props.jabatan}/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(DosenView)
