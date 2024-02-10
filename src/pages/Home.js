import { useContext } from 'react'
import AppContext from '../context/AppContext'
import ImageBanner from '../components/ImageBanner'
import Banner from '../assets/img/banner-2.jpg'
import ComponentSection from '../components/ComponentSection'
import Course from '../components/Course'
import Project from '../components/Project'
import CategoryTabs from '../components/CategoryTabs'

function Home (props) {
  const { projects, courses } = useContext(AppContext);

  return (
    <div className='container'>
      <ImageBanner img={Banner} />
      <CategoryTabs data={courses} />
      <ComponentSection title='Courses' className="courses-section">
        <div className='course-container'>
          {courses.length > 0
            ? courses.map((item, index) => {
                if (item.id < 4) {
                  return <Course key={item.id} data={item} />
                }
                return <></>
              })
            : null}
        </div>
      </ComponentSection>
      <ComponentSection title='Projects' className="projects-section">
        <div className='project-container'>
          {projects.length > 0
            ? projects.map((item, index) => {
                if (item.id < 4) {
                  return <Project key={item.id} data={item} />
                }
                return <></>
              })
            : null}
        </div>
      </ComponentSection>
    </div>
  )
}

export default Home
