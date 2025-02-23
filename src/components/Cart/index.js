import Header from '../Header'
import CartListView from '../CartListView'

import './index.css'

const Cart = () => (
  <>
    <Header />
    <div className="cart-container">
      <div className="cart-content-container">
        <h1 className="cart-heading">My Cart</h1>
        <img src="https://img.freepik.com/free-photo/blue-turquoise-cassette-tapes-shopping-cart-isolated-white-background_23-2147889312.jpg?t=st=1740324336~exp=1740327936~hmac=f70ebd553d7071b982034d040a48cceefa6d2d1f48f280cbdf5afd22cd7465c8&w=900" alt="cart" className='cart-img'/>
        <CartListView />
      </div>
    </div>
  </>
)
export default Cart
