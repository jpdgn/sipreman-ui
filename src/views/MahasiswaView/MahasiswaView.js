import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Menu from '../../components/Menu/Menu'
import TopMenu from '../../components/Menu/TopMenu'
import Mahasiswa from '../../components/Mahasiswa/Mahasiswa'

import { getMahasiswaData } from '../../redux/modules/mahasiswa'

const mapStateToProps = (state) => ({
  data: state.mahasiswa.data,
  nim: state.mahasiswa.nim
})

export class MahasiswaView extends Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func
  }

  componentWillMount () {
    this.props.dispatch(getMahasiswaData())
  }
  render () {
    return (
      <div>
        <TopMenu />
        <div className='row'>
          <div className='ui grid container'>
            <Menu />
            <Mahasiswa nim={this.props.nim} data={this.props.data}/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(MahasiswaView)
