import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, error: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data, error: '' })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/tracks')
      })
      .catch(() => this.setState({ error: 'Invalid Crendentials'}))
  }

  render(){
    return (
      <main>
        <form onSubmit={this.handleSubmit} >
          <h2>Login</h2>
          <label className='label'>Email</label>
          <div className="control">
            <input
              onChange = {this.handleChange}
              className="input"
              name="email"
              placeholder="Your Email Please."/>
          </div>
          <label className='label'>Password</label>
          <div className="control">
            <input
              onChange = {this.handleChange}
              type="password"
              className="input"
              name="password"
              placeholder="Your Passwork Please."/>
          </div>
          <button type="submit" className="button" > Log in</button>
        </form>
      </main>
    )
  }
}

export default Login
