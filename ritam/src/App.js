import React from 'react'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achivements from './components/Achivements'
import About from './components/About'
import { Route,Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        
          <Route path='/' exact Component={Home}/>
          <Route path='/projects' Component={Projects}/>
        
      </Routes>
    </div>
  )
}

export default App

