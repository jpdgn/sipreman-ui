import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Login from '../../components/Login/Login'

const mapStateToProps = (state) => ({
  token: window.localStorage.getItem('auth-key')
})

export class LoginView extends Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    isLoading: PropTypes.bool
  }

  componentWillMount () {
    if(this.props.token) {
      this.props.history.pushState(null, '/')
    }
  }
  render () {
    return (
        <div className='ui middle aligned center aligned grid'>
          <div className='column'>
          <h2 className="ui teal image header">
            <div className="content">
              Log-in to your account
            </div>
          </h2>
            <Login token={this.props.token} location={this.props.location} history={this.props.history}/>
          </div>
        </div>
    )
  }
}

export default connect(mapStateToProps)(LoginView)
