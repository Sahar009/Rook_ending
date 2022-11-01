import React from 'react'
import { BrowserRouter as Router} from "react-router-dom"
import Header from "../common/header/Header"
import Footer from "../common/Footer/Footer"

const pages = () => {
  return (
    <><Router>
    <Header />
    {/* <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/pricing' component={Pricing} />
      <Route exact path='/contact' component={Contact} />
    </Switch> */}
    <Footer />
  </Router></>
  )
}

export default pages