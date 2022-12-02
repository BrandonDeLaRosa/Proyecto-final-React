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
import ProtectedRoutes from './Components/ProtectedRoutes'
import NewUser from './pages/NewUser'

function App() {
 
  const isLoading = useSelector(state => state.isLoading)

  return (
    <HashRouter>
      <Header />
      {isLoading && <LoadingScreen />}
      {/* Container de react bootstrap y utilities de botstrap vanilla */}
      <Container className='my-5'>
        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/newUser" element={<NewUser/>} />
            <Route path="/products/:id" element={<Products />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />} />
          </Route>
        </Routes>
      </Container>
    </HashRouter>
  )
}

export default App
// https://documenter.getpostman.com/view/8450870/2s847ESZzN
// http://127.0.0.1:5173/
// john@gmail.com
// Credentials: "email": "max@gmail.com", "password": "pass1234"


// https://codesandbox.io/s/news-app-msn21f


// const getConfig = () => ({
//   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
// });

// export default getConfig;
