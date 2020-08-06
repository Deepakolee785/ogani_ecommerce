import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Home from './components/pages/home'
import Shop from './components/pages/shop'
import Blog from './components/pages/blog'
import ContactUs from './components/pages/contact'
import About from './components/pages/about'
import Cart from './components/pages/cart'
import Wishlist from './components/pages/wishlist'
import Auth from './components/pages/auth'
import Footer from './components/layouts/Footer'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/about-us" component={About} />
        <Route path="/cart" component={Cart} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/auth" component={Auth} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
