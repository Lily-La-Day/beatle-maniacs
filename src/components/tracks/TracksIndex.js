import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



class TracksIndex extends React.Component {
  constructor() {
    super()

    this.state = { tracks: null }
    
  }


  componentDidMount() {
    axios.get('/api/tracks')
      .then(res => this.setState({ tracks: res.data }))
      .catch(err => console.log(err))
  }




  render() {

    if (!this.state.tracks) return null
    console.log(this.state.tracks)

    return (
      <main>


        <section className="frontSection">
          <div className="container">


            <div className="columns is-mobile is-multiline">

              {this.state.tracks.map(track => (

                <section  key={track._id} className ="disc">

                  <Link to={`/tracks/${track._id}`}>
                    <span key={track._id}><h3 key={track._id}> {track.title}</h3></span>
                  </Link>
                </section>

              ))}

            </div>
          </div>


        </section>
      </main>
    )
  }
}

export default TracksIndex
