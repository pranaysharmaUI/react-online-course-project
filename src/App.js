import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import { lazy, useState } from 'react'
import {WishlistProvider} from './context/WishlistContext'
import useLazy from './custom/useLazy'
import GoalContext from './context/GoalContext'
import CourseSearch from './pages/CourseSearch'
import ProjectSearch from './pages/ProjectSearch'
const Info=lazy(() => import('./components/Info'));
const Wishlist=lazy(() => import('./components/Wishlist'));
const ProfilePage=lazy(() => import('./pages/ProfilePage'));
const CourseDetail=lazy(() => import('./pages/CourseDetail'));
const ProjectDetail=lazy(() => import('./pages/ProjectDetail'));
const Courses=lazy(() => import('./pages/Courses'));
const Projects=lazy(() => import('./pages/Projects'));

function App () {
  const [wishlist, setWishlist] = useState([]);
  const [goals,setGoals]=useState([]);
  const setGoalData= title=>
  {
    setGoals(data => [...data,title]);
  }
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
  const goalData={goals,setGoalData};
  return (
    <WishlistProvider value={data}>
      <GoalContext.Provider value={goalData}>
      <div className='container'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/courses' element={useLazy(<Courses />)} />
            <Route path='/courses/:id' element={useLazy(<CourseDetail />)} />
            <Route path="/courses/search/" element={<CourseSearch />} />
            <Route path='/projects' element={useLazy(<Projects />)} />
            <Route path="/projects/search" element={<ProjectSearch />} />
            <Route path=':/projects/:id' element={useLazy(<ProjectDetail />)} />
            <Route path='/profile' element={useLazy(<ProfilePage />)} >
              <Route element={useLazy(<Info />)} index />
              <Route path='wishlist' element={useLazy(<Wishlist />)} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      </GoalContext.Provider>
    </WishlistProvider>
  )
}

export default App
