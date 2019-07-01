import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './style.scss'

import 'bulma'

// import Home from './components/common/Home'
// import NavBar from './components/common/Navbar'
// import Register from './components/auth/Register'
// import Login from './components/auth/Login'
import TracksIndex from './components/tracks/TracksIndex'
import TracksShow from './components/tracks/TracksShow'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

import Nav from './components/common/Nav'
const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Nav />
        <Switch>

          <Route path="/register" component={Register} />

          <Route path="/login" component={Login} />
          <Route path="/tracks/:id" component={TracksShow} />
          <TracksIndex />

        </Switch>
      </main>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
