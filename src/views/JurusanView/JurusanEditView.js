import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Menu from '../../components/Menu/Menu'
import TopMenu from '../../components/Menu/TopMenu'
import JurusanForm from '../../components/Jurusan/JurusanForm'

import { getJurusanById } from '../../redux/modules/jurusan'

const mapStateToProps = (state) => ({
  data: state.jurusan.data,
  isLoading: state.jurusan.isLoading,
  message: state.jurusan.message
})

export class JurusanEditView extends Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    params: PropTypes.string,
    isLoading: PropTypes.bool,
    message: PropTypes.string
  }

  componentWillMount () {
    this.props.dispatch(getJurusanById(this.props.params.id))
  }
  render () {
    return (
      <div>
        <TopMenu />
        <div className='row'>
          <div className='ui grid container'>
            <Menu />
            <JurusanForm
              data={this.props.data}
              isLoading={this.props.isLoading}
              message={this.props.message}/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(JurusanEditView)
