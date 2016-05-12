import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Menu from '../../components/Menu/Menu'
import TopMenu from '../../components/Menu/TopMenu'
import JabatanForm from '../../components/Jabatan/JabatanForm'

import { getJabatanById } from '../../redux/modules/jabatan'

const mapStateToProps = (state) => ({
  data: state.kelas.data,
  isLoading: state.kelas.isLoading,
  message: state.kelas.message
})

export class JabatanEditView extends Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    params: PropTypes.string,
    isLoading: PropTypes.bool,
    message: PropTypes.string
  }

  componentWillMount () {
    this.props.dispatch(getJabatanById(this.props.params.id))
  }
  render () {
    return (
      <div>
        <TopMenu />
        <div className='row'>
          <div className='ui grid container'>
            <Menu />
            <JabatanForm
              data={this.props.data}
              isLoading={this.props.isLoading}
              message={this.props.message}/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(JabatanEditView)
