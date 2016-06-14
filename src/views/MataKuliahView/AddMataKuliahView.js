import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Menu from '../../components/Menu/Menu'
import TopMenu from '../../components/Menu/TopMenu'
import AddMataKuliahForm from '../../components/MataKuliah/AddMataKuliahForm'

const mapStateToProps = (state) => ({
  isLoading: state.kelas.isLoading,
  message: state.kelas.message
})

export class AddMataKuliahView extends Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    params: PropTypes.string,
    isLoading: PropTypes.bool,
    message: PropTypes.string
  }

  componentWillMount () {
  }

  render () {
    return (
      <div>
        <TopMenu />
        <div className='row'>
          <div className='ui grid container'>
            <Menu />
            <div className='ui main grid'>
              <div className='sixteen wide stretched column'>
                <div className='ui segment'>
                  <AddMataKuliahForm
                    isLoading={this.props.isLoading}
                    message={this.props.message} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(AddMataKuliahView)
