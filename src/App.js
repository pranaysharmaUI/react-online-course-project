import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Projects from './pages/Projects';
import CourseDetail from './pages/CourseDetail';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetail />} />
        <Route path='/projects' element={<Projects />}  />
        <Route path=':/projects/:id' element={<ProjectDetail />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
