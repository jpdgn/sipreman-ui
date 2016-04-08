import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Menu from '../../components/Menu/Menu'
import TopMenu from '../../components/Menu/TopMenu'
import Ruangan from '../../components/Ruangan/Ruangan'

import { getRuangan } from '../../redux/modules/ruangan'

const mapStateToProps = (state) => ({
  data: state.ruangan.data,
  isLoading: state.ruangan.isLoadingData
})

export class RuanganView extends Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    isLoading: PropTypes.bool
  }

  componentWillMount () {
    this.props.dispatch(getRuangan())
  }
  render () {
    return (
      <div>
        <TopMenu/>
        <div className='row'>
          <div className='ui grid container'>
            <Menu/>
            <Ruangan data={this.props.data} isLoading={this.props.isLoading}/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(RuanganView)
