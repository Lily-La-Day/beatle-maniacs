import React from 'react'
import Modal from './Modal'
import UserStars from '../auth/UserStars'
import SongStars from '../tracks/SongStars'
import { Link, withRouter } from 'react-router-dom'

class Nav extends React.Component {
  constructor() {
    super()

    this.state = { show: null, showStars: null, showSongs: null }

    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.showStars = this.showStars.bind(this)
    this.hideStars = this.hideStars.bind(this)
    this.showSongs = this.showSongs.bind(this)
    this.hideSongs = this.hideSongs.bind(this)
  }

  showModal() {
    console.log('modal')
    this.setState({ show: true })
    console.log(this.state)

  }

  hideModal() {
    this.setState({ show: false })
  }

  showStars() {
    console.log('modal')
    this.setState({ showStars: true })
    console.log(this.state)

  }

  hideStars() {
    this.setState({ showStars: false })
  }

  showSongs() {
    console.log('modal')
    this.setState({ showSongs: true })
    console.log(this.state)

  }

  hideSongs() {
    this.setState({ showSongs: false })
  }




  render() {

    return(
      <nav className="navbar">



        <Link to="/register">Register</Link>  <Link to="/login">Log In</Link>
        <Link to="/">The Songs</Link>
        <a
          className="open-modal"
          type="button"
          onClick={this.showModal}>
          The Stars (and How to use them)
        </a>
        {this.state.show &&
          <Modal
            show={this.state.show}
            handleClose={this.hideModal}>
          </Modal>
        }
        <a
          className="open-modal open-stars"
          type="button"
          onClick={this.showStars}>
        Your Stars
        </a>
        {this.state.showStars &&
        <UserStars

          show={this.state.showStars}
          handleClose={this.hideStars}>
        </UserStars>
        }

        <a
          className="open-modal open-song"
          type="button"
          onClick={this.showSongs}>
        The Song Board
        </a>
        {this.state.showSongs &&
        <SongStars

          show={this.state.showSongs}
          handleClose={this.hideSongs}>
        </SongStars>
        }

      </nav>
    )
  }
}

export default withRouter(Nav)


// import React from 'react'
// import { Link, withRouter } from 'react-router-dom'
// // import Auth from '../../lib/Auth'
//
// class Nav extends React.Component {
//   constructor() {
//     super()
//
//
//
//   }
//
//
//   render() {
//     console.log(this.state)
//     return (
//       <nav className="navbar">
//
//         <p>To see how the tracks have been ranked and to add your own ratings...
//           <span><Link to="/register">Register</Link> </span>or   <span> <Link to="/login">Log In</Link></span>
//           <Link to="/">Back To Songs</Link> </p>
//
//
//
//
//
//       </nav>
//     )
//   }
// }
//
// export default withRouter(Nav)
