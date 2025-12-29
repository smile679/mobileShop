import { Route, Routes } from 'react-router-dom'
import Home from './components/home/layout'
import Products from './components/products/layout'
import Header from './components/header/layout'
import NewProducts from './pages/home/NewProducts'
import Footer from './components/footer/Footer'
import About from './pages/home/About'
import SellItem from './components/sell/layout'

function App(){

  return (
    <div className='relative min-h-screen'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/products' element={<Products />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/sell' element={<SellItem />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;