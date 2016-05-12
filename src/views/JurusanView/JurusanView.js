import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Menu from '../../components/Menu/Menu'
import TopMenu from '../../components/Menu/TopMenu'
import Jurusan from '../../components/Jurusan/Jurusan'

import { getJurusan } from '../../redux/modules/jurusan'

const mapStateToProps = (state) => ({
  data: state.jurusan.data,
  isLoading: state.jurusan.isLoadingData
})

export class JurusanView extends Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    isLoading: PropTypes.bool
  }

  componentWillMount () {
    this.props.dispatch(getJurusan())
  }
  render () {
    return (
      <div>
        <TopMenu/>
        <div className='row'>
          <div className='ui grid container'>
            <Menu/>
            <Jurusan data={this.props.data} isLoading={this.props.isLoading}/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(JurusanView)
