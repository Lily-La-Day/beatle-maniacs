import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'


class Rating extends React.Component {
  constructor() {
    super()
    this.state = { 'rating': {} }
    this.starNumber = 0
    this.finalStarNumber = 0
    this.rated = false

    this.starRating = this.starRating.bind(this)
    this.rate = this.rate.bind(this)

  }

  starRating(e) {
    console.log(this.props.track._id)

    const one = document.querySelector('.one')
    const two = document.querySelector('.two')
    const three = document.querySelector('.three')
    const four = document.querySelector('.four')
    const five = document.querySelector('.five')

    if(!this.rated)
      if(e.target.classList.contains('one')){

        one.classList.add('starAfter')
        this.starNumber = 1
        this.rated = true
      }  else if(e.target.classList.contains('two')){

        one.classList.add('starAfter')
        two.classList.add('starAfter')
        this.starNumber = 2
        this.rated = true
      }  else if(e.target.classList.contains('three')){

        one.classList.add('starAfter')
        two.classList.add('starAfter')
        three.classList.add('starAfter')
        this.starNumber = 3
        this.rated = true

      }  else if(e.target.classList.contains('four')){

        one.classList.add('starAfter')
        two.classList.add('starAfter')
        three.classList.add('starAfter')
        four.classList.add('starAfter')
        this.starNumber = 4
        this.rated = true
      } else if(e.target.classList.contains('five')){

        one.classList.add('starAfter')
        two.classList.add('starAfter')
        three.classList.add('starAfter')
        four.classList.add('starAfter')
        five.classList.add('starAfter')
        this.starNumber = 5
        this.rated = true
      }
    console.log(this.state.rating)


    this.setState({rating: this.starNumber})
    document.querySelector('p').classList.remove('none')



  }

  rate () {
    console.log(this.state)
    this.finalStarNumber = this.state.rating
    axios.post(`/api/tracks/${this.props.track._id}/ratings`, this.state, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}


    })
    document.querySelector('p').classList.add('none')


  }









  render() {
    const rating = this.props.track.ratingsTotal + this.starNumber
    console.log(rating)
    return (
      <main>
        <section className ="starSection">
          <div className ="starSection" >
            <img src="../assets/star.svg" className="starBefore one"  onClick={this.starRating}/>
            <img src="../assets/star.svg"  className="starBefore two" onClick={this.starRating}/>
            <img src="../assets/star.svg"  className="starBefore three" onClick={this.starRating}/>
            <img src="../assets/star.svg" className="starBefore four" onClick={this.starRating}/>
            <img src="../assets/star.svg" className="starBefore five" onClick={this.starRating}/>

            <p className='none star-text'> Click below to confirm your rating, you will lose {this.starNumber} stars. Remember
  you can  check how many stars by looking at -Your Stars-.</p>

            <button className="rateButton" onClick={this.rate}> rate </button>

          </div>

          <section className="section">
            <div className="container">

              <h2>{rating}</h2>

            </div>
          </section>


        </section>


      </main>
    )
  }
}

export default Rating
