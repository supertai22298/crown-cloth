import React from 'react'
import './App.css'
import Homepage from './pages/homepage/homepage.component'

import { Switch, Route } from 'react-router-dom'

const HatsPage = () => <div>Hats Page</div>

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  )
}

export default App
