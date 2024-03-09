import { Suspense, lazy,useEffect,useState } from 'react'
import { useAppContext } from '../context/AppContext'
import Banner from '../components/Banner'
import ComponentSection from '../components/ComponentSection'
const SidebarFilter=lazy(() => import('../components/SidebarFilter'));
const Course=lazy(() => import('../components/Course'));

function Courses (props) {
  const context = useAppContext()
  const data = context.courses;
  const [filter, setFilter] = useState({ type: 'Technologies', name: 'all' })
  const [filterData, setFilterData] = useState(data)


  useEffect(() => {
    if (filter.name === 'all') {
      setFilterData(data)
    } else {
      if (filter.type === 'Technologies') {
        let arr = data.filter(item => {
          let status = item.technologies.filter(data => {
            return data === filter.name
          })
          return status.length > 0
        })

        setFilterData(arr)
      }
      if (filter.type === 'Level') {
        let arr = data.filter(item => {
            return item.experience === filter.name

        })

        setFilterData(arr)
      }
    }
  }, [data, filter])
  return (
    <div className='container'>
      <Banner title='Courses' />
      <ComponentSection className='courses-section' title='All Courses'>
        <Suspense fallback="Loading...">
        <SidebarFilter
          setFilter={setFilter}
          filter={filter}
          list={[
            {
              type: 'Technologies',
              filter: ['all', 'React', 'Javascript', 'NodeJS', 'NextJS']
            },
            {
              type: 'Level',
              filter: ['Beginner', 'Intermediate', 'Advance']
            }
          ]}
        /></Suspense>
        <div className='course-container'>
          {filterData.length > 0
            ? filterData.map((item, index) => (
                <Suspense fallback="Loading..."><Course key={item.id} data={item} /></Suspense>
              ))
            : null}
        </div>
      </ComponentSection>
    </div>
  )
}

export default Courses
