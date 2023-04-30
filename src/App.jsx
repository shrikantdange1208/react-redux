import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { CartContainer } from './components/CartContainer'
import { calculateTotals, getCartItems } from './features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './components/Modal'

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartItems('random'))
  }, [])

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <div className="App">
      <main>
        {isOpen && <Modal />}
        <Navbar />
        <CartContainer />
      </main>
    </div>
  )
}

export default App
