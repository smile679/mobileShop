import { Route, Routes } from 'react-router-dom'
import Home from './components/home/layout'
import Products from './components/products/layout'
import Header from './components/header/layout'
import NewProducts from './pages/home/NewProducts'

function App(){

  return (
    <div className='min-h-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/products' element={<Products />}/>
      </Routes>
    </div>
  )
}

export default App;