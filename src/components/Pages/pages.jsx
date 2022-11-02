import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "../common/header/Header"
import Footer from "../common/Footer/Footer"
import Home from '../home/Home'
import About from '../about/About'
import Services from '../services/Services'
import Blog from '../blog/Blog'
import Contact from '../contact/Contact'


const pages = () => {
  return (
    <><Router>
    <Header />
    <Routes>
      <Route exact path='/' component={Home} />


      <Route exact path='/about' component={About} />

       <Route exact path='/services' component={Services} />
      <Route exact path='/blog' component={Blog} />
      
      <Route exact path='/contact' component={Contact} /> 
    </Routes>
    <Footer />
  </Router></>
  )
}

export default pages