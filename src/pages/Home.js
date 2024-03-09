import { Suspense, lazy } from 'react'
import { useAppContext } from '../context/AppContext'
import ImageBanner from '../components/ImageBanner'
import Banner from '../assets/img/banner-2.jpg'
import ComponentSection from '../components/ComponentSection'
import CategoryTabs from '../components/CategoryTabs'
import ExperienceTabs from '../components/ExperienceTabs'
const Course=lazy(() => import('../components/Course'));
const Project=lazy(() => import('../components/Project'));

function Home (props) {
  const { projects, courses } = useAppContext();

  return (
    <div className='container'>
      <ImageBanner img={Banner} />
      <CategoryTabs data={courses} />
      <ExperienceTabs data={projects} />
      <ComponentSection title='Courses' className="courses-section">
        <div className='course-container'>
          {courses.length > 0
            ? courses.map((item, index) => {
                if (item.id < 4) {
                  return <Suspense fallback="Loading..."><Course key={item.id} data={item} /></Suspense>
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
                  return <Suspense fallback="Loading..."><Project key={item.id} data={item} /></Suspense>
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
