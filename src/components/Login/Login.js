import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { login } from '../../redux/modules/login'

const form = 'loginForm'
const fields = ['username', 'password']

class Login extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      tipeFilter: ''
    }
  }
  static propTypes = {
  }

  submitLogin = (e) => {
    let { dispatch } = this.props
    let nextPath = '/mahasiswa'
    var loginData = {
      user: this.props.values.username,
      password: this.props.values.password
    }
    if (this.props.location.state && this.props.location.state.nextPathname){
        nextPath = this.props.location.state.nextPathname
    }
    console.log(loginData)
    console.log(nextPath)
    dispatch(login(loginData, () => {
      this.props.history.pushState({}, nextPath)
    }))
  }

  render () {
    const {fields: {username, password}} = this.props
    return (
      <form className="ui large form">
        <div className="ui stacked segment">
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input
                {...username}
                type="text"
                name="email"
                placeholder="E-mail address"/>
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input
                {...password}
                type="password"
                name="password"
                placeholder="Password"/>
            </div>
          </div>
          <div className="ui fluid large teal submit button" onClick={this.props.handleSubmit(this.submitLogin)}>Login</div>
        </div>
        <div className="ui error message"></div>
      </form>
    )
  }
}

export default reduxForm({
  form: form,
  fields
})(Login)
