import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
