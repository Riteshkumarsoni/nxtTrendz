import {Component} from 'react'
import {Route, Routes, Navigate, BrowserRouter as Router} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  addCartItem = product => {
    this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
  }

  deleteCartItem = () => {}

  render() {
    const {cartList} = this.state

    return (
      <Router>
         <CartContext.Provider
          value={{
            cartList,
            addCartItem: this.addCartItem,
            deleteCartItem: this.deleteCartItem,
          }}
        >
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
            <Route
              path="/products/:id"
              element={<ProtectedRoute><ProductItemDetails /></ProtectedRoute>}
            />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/not-found" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
            <Route path='*' element={<Navigate to="/not-found" />} />
            
          </Routes>
        </CartContext.Provider>
      </Router>
    )
  }
}

export default App
