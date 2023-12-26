import { useState, useContext } from 'react';
import { IoIosSearch } from "react-icons/io";
import './SearchBar.css'
import { fetchProducts } from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar() {

  const [searchValue, setSearchValue] = useState<string>('')

  const {setProducts, setLoading} = useContext(AppContext)

  const handleSearch = async (event) => {
    event.preventDefault()
    setLoading(true)
    
    const products = await fetchProducts(searchValue)
    setProducts(products)
    // setLoading(false)
    setSearchValue('')
  }

  return (
    <form className='search-bar' onSubmit={handleSearch}>
  
      <input 
      type="search" 
      placeholder="buscar produtos"
      className="search__input"
      onChange={({target}) => setSearchValue(target.value)}
      required="required"
      value={searchValue}
      />
      
      <button type='submit' className='search__button'>
        <IoIosSearch />
      </button>
    </form>
  )
}

export default SearchBar