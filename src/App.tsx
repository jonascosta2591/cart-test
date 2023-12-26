import { useState } from 'react'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import './App.css'
import Provider from './context/Provider'
import Cart from './components/Cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Provider>
          <Header></Header>
          <Products/>
          <Cart/>
        </Provider>
      </div>
    </>
  )
}

export default App
