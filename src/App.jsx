import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './Components/Header'
import Products from './pages/Products'
import Purchases from './pages/Purchases'
import LoadingScreen from './Components/LoadingScreen'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'

function App() {
 
  const isLoading = useSelector(state => state.isLoading)

  return (
    <HashRouter>
      <Header/>
      {isLoading && <LoadingScreen/>}
      {/* Container de react bootstrap y utilities de botstrap vanilla */}
      <Container className='my-5'> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:id" element={<Products/>}/>
        <Route path="/purchases" element={<Purchases/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </Container>
    </HashRouter>
  )
}

export default App
// https://documenter.getpostman.com/view/8450870/2s847ESZzN
// http://127.0.0.1:5173/