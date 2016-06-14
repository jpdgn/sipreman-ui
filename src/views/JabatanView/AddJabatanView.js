import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Menu from '../../components/Menu/Menu'
import TopMenu from '../../components/Menu/TopMenu'
import AddJabatanForm from '../../components/Jabatan/AddJabatanForm'


const mapStateToProps = (state) => ({
  data: state.kelas.data,
  isLoading: state.kelas.isLoading,
  message: state.kelas.message
})

export class AddJabatanView extends Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    params: PropTypes.string,
    isLoading: PropTypes.bool,
    message: PropTypes.string
  }

  componentWillMount () {}
  render () {
    return (
      <div>
        <TopMenu />
        <div className='row'>
          <div className='ui grid container'>
            <Menu />
            <AddJabatanForm
              data={this.props.data}
              isLoading={this.props.isLoading}
              message={this.props.message} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(AddJabatanView)
