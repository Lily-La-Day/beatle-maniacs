import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class RatingTotal extends React.Component {
  constructor() {
    super()


  }


  componentDidUpdate() {
    axios.get('/api/tracks')
      .then(res => this.setState({ tracks: res.data }))
      .catch(err => console.log(err))
  }



  render() {
    console.log(this.props.total)

    return (
      <section className="section">
        <div className="container">

          <h2>{this.props.total}</h2>

        </div>
      </section>
    )
  }
}

export default RatingTotal
