import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Menu from '../../components/Menu/Menu'
import TopMenu from '../../components/Menu/TopMenu'
import EditRuanganForm from '../../components/Ruangan/EditRuanganForm'

import { getRuanganById } from '../../redux/modules/ruangan'
const mapStateToProps = (state) => ({
  data: state.ruangan.data,
  isLoading: state.ruangan.isLoading,
  message: state.ruangan.message
})

export class EditRuanganView extends Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    params: PropTypes.string,
    isLoading: PropTypes.bool,
    message: PropTypes.string
  }

  componentWillMount () {
    this.props.dispatch(getRuanganById(this.props.params.id))
  }
  render () {
    return (
      <div>
        <TopMenu />
        <div className='row'>
          <div className='ui grid container'>
            <Menu />
            <EditRuanganForm
              data={this.props.data}
              isLoading={this.props.isLoading}
              message={this.props.message} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(EditRuanganView)
