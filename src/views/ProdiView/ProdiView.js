import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Menu from '../../components/Menu/Menu'
import TopMenu from '../../components/Menu/TopMenu'
import Prodi from '../../components/Prodi/Prodi'

import { getProdi } from '../../redux/modules/prodi'

const mapStateToProps = (state) => ({
  data: state.prodi.data,
  isLoading: state.prodi.isLoadingData
})

export class ProdiView extends Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    isLoading: PropTypes.bool
  }

  componentWillMount () {
    this.props.dispatch(getProdi())
  }
  render () {
    return (
      <div>
        <TopMenu/>
        <div className='row'>
          <div className='ui grid container'>
            <Menu/>
            <Prodi data={this.props.data} isLoading={this.props.isLoading}/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(ProdiView)
