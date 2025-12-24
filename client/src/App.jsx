import { Route, Routes } from 'react-router-dom'
import Home from './components/home/layout'
import Products from './components/products/layout'
import Header from './components/header/layout'
import NewProducts from './pages/home/NewProducts'
import Footer from './components/footer/Footer'

function App(){

  return (
    <div className='relative min-h-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/products' element={<Products />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;