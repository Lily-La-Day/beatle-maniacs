import React from 'react'
import axios from 'axios'
import Sound from 'react-sound'
import Rating from './Rating'
// import RatingTotal from './RatingTotal'
// import { Link } from 'react-router-dom'
// import Auth from '../../lib/Auth'

class TracksShow extends React.Component {
  constructor() {
    super()

    this.state = { track: null }

  }

  componentDidMount() {
    axios.get(`/api/tracks/${this.props.match.params.id}`)
      .then(res => this.setState({ track: res.data }))
      .catch(err => console.log(err))
  }



  render() {
    if (!this.state.track) return null
    const { track } =  this.state
    return (
      <section className="songSection">
        <div className="container">

          <h2 className="trackTitle">{track.title}</h2>

          <hr/>

          <Sound
            url={track.audio}
            playStatus={Sound.status.PLAYING}
          />
          <h6 className="starQ"> How many stars? </h6>
        </div>

        <Rating track={track} />

        <h1>Star Total: {track.ratingsTotal}</h1>


      </section>


    )
  }
}

export default TracksShow
