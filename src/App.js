import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Projects from './pages/Projects'
import CourseDetail from './pages/CourseDetail'
import ProjectDetail from './pages/ProjectDetail'
import { useState } from 'react'
import WishlistContext from './context/WishlistContext'
import ProfilePage from './pages/ProfilePage'
import Wishlist from './components/Wishlist'
import Info from './components/Info'

function App () {
  const [wishlist, setWishlist] = useState([])
  const setList = data => {
    setWishlist(item => [...item, data])
  }
  const removeList = data => {
    let temp = wishlist.filter(item => {
      if (item.id === data.id && item.type === data.type) {
        return false
      } else {
        return true
      }
    })
    setWishlist(temp);
  }
  const data = { wishlist, setList,removeList }
  return (
    <WishlistContext.Provider value={data}>
      <div className='container'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/courses/:id' element={<CourseDetail />} />
            <Route path='/projects' element={<Projects />} />
            <Route path=':/projects/:id' element={<ProjectDetail />} />
            <Route path='/profile' element={<ProfilePage />} >
              <Route element={<Info />} index />
              <Route path='wishlist' element={<Wishlist />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </WishlistContext.Provider>
  )
}

export default App
