import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/Router'
import Route from './components/Route'
import './index.css'
import Root from './pages/Root'
import About from './pages/About'
import Routes from './components/Routes'

const container = document.getElementById('root')

ReactDOM.createRoot(container).render(
  <Router>
    <Routes>
      <Route path="/" component = {<Root/>} />
      <Route path="/about" component = {<About/>} />
    </Routes>
  </Router>
)