import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'


class UserStars extends React.Component {
  constructor() {
    super()
    this.state = { stars: 15 }
    // this.showStars = this.showStars.bind(this)

  }

  componentDidMount() {
    axios.post('/api/showstars', null,  {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(res => this.setState({ stars: res.data }))
      .catch(() => this.setState({ error: 'Invalid Crendentials'}))

  }


  render(){
    console.log(this.state.stars)
    if (!this.state.stars) return null
    return(

      <main className={this.props.show ? 'block' : 'none'}>
        <div className="star-board">


          <p> You have {this.state.stars} stars left. Use them wisely! </p>

          <button
            className="close-modal"
            onClick={this.props.handleClose}>
          Got it
          </button>
        </div>
      </main>
    )
  }
}





export default UserStars
