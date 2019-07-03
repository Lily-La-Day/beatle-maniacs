import React from 'react'
import axios from 'axios'


class SongStars extends React.Component {
  constructor() {
    super()
    this.state = { songs: null }

  }

  componentDidMount() {
    axios.get('/api/tracks')


      .then(res => this.setState({ songs: res.data }))



      .catch(() => this.setState({ error: 'Invalid Crendentials'}))

  }

  compareFunction(a, b) {
    if ( a.ratingsTotal < b.ratingsTotal) {
      return 1
    }
    if (a.ratingsTotal > b.ratingsTotal) {
      return -1
    }

    return 0
  }


  render(){
    console.log(this.props.show)

    if (!this.state.songs) return null
    console.log(this.state.songs.sort(this.compareFunction))
    return(

      <main className={this.props.show ? 'block' : 'none'}>
        <div className="song-board">

          <h3 className="scoreboard"> How have the songs been rated so far? </h3>
          {this.state.songs.sort().map(song => (

            <h4 key={song._id}> {song.title} : {song.ratingsTotal} </h4>

          ))}
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

export default SongStars


// import React from 'react'
// import axios from 'axios'
//
//
// class UserStars extends React.Component {
//   constructor() {
//     super()
//     this.state = { users: null }
//
//   }
//
//   componentDidMount() {
//     axios.get('/api/users')
//
//
//       .then(res => this.setState({ stars: res.data }))
//
//
//
//       .catch(() => this.setState({ error: 'Invalid Crendentials'}))
//
//   }
//
//
//
//
//   render(){
//     console.log(this.state.stars)
//     if (!this.state.tracks) return null
//     console.log(this.state.tracks)
//     console.log(this.props)
//
//     return (
//
//       <main className={this.props.show ? 'block' : 'none'}>
//         <div className="modal-main">
//
//           <main>
//
//
//             <section className="frontSection">
//               <div className="container">
//
//
//                 <div className="columns is-mobile is-multiline">
//
//                   {this.state.users.map(user => (
//
//                     <h4> {user.username} : {user.stars} </h4>
//
//                   ))}
//                 </div>
//               </div>
//             </section>
//           </main>
//           )
//         }
//       }
//
//
//           <button
//             className="close-modal"
//             onClick={this.props.handleClose}>
//           Got it
//           </button>
//         </div>
//       </main>
//     )
//   }
// }
//
