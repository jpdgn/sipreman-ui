import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Menu from '../../components/Menu/Menu'
import TopMenu from '../../components/Menu/TopMenu'
import MataKuliah from '../../components/MataKuliah/MataKuliah'

import { getMk } from '../../redux/modules/mk'

const mapStateToProps = (state) => ({
  data: state.mk.data,
  isLoading: state.mk.isLoadingData
})

export class MataKuliahView extends Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    isLoading: PropTypes.bool
  }

  componentWillMount () {
    this.props.dispatch(getMk())
  }
  render () {
    return (
      <div>
        <TopMenu/>
        <div className='row'>
          <div className='ui grid container'>
            <Menu/>
            <MataKuliah data={this.props.data} isLoading={this.props.isLoading}/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(MataKuliahView)
