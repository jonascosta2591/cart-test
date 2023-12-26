import { useState } from "react"
import AppContext from "./AppContext"


function Provider({ children }) {

  const [products, setProducts] = useState<[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [cartItems, setCartItems] = useState<[]>([])
  const [cartActive, setCartActive] = useState<string>('')
  
  const value = {
    products, 
    setProducts,
    loading, 
    setLoading,
    cartItems, 
    setCartItems,
    cartActive, 
    setCartActive
  }

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  )
}

export default Provider