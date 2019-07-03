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

    this.state = { track: null, deezer_data: null }

  }

  componentDidMount() {

    axios.get(`/api/tracks/${this.props.match.params.id}`)
      .then(res => this.setState({ track: res.data }))
      .catch(err => console.log(err))

  }

  getDeezerData() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${this.state.track.deezer_id}`)
      .then(res =>

        this.setState({ deezer_data: res.data })

      )
      .catch(err => console.log(err))
  }


  componentDidUpdate() {
    this.getDeezerData()
  }


  render() {
    if (!this.state.track) return null
    if (!this.state.deezer_data) return null
    // const { track } =  this.state
    console.log('deezer',this.state.deezer_data)
    return (
      <section className="songSection">
        <div className="container">

          <h2 className="trackTitle">{this.state.track.title}</h2>

          <hr/>

          <Sound
            url={this.state.track.audio}
            playStatus={Sound.status.PLAYING}
          />
          <h6 className="starQ"> How many stars? </h6>
        </div>

        <Rating track={this.state.track} />

        <div className="info">

        </div>
        <div className="image-container">

          <img className="trackImage" src={this.state.deezer_data.album.cover_xl}/>

        </div>


      </section>


    )
  }
}

export default TracksShow
