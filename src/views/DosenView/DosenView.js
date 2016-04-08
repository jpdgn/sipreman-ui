import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Menu from '../../components/Menu/Menu'
import TopMenu from '../../components/Menu/TopMenu'
import Dosen from '../../components/Dosen/Dosen'

import { getDosenData } from '../../redux/modules/dosen'

const mapStateToProps = (state) => ({
  data: state.dosen.data
})

export class DosenView extends Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func
  }

  componentWillMount () {
    this.props.dispatch(getDosenData())
  }
  render () {
    return (
      <div>
        <TopMenu/>
        <div className='row'>
          <div className='ui grid container'>
            <Menu/>
            <Dosen data={this.props.data}/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(DosenView)
