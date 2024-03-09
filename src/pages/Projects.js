import { Suspense, lazy, useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import Banner from '../components/Banner'
import ComponentSection from '../components/ComponentSection'
import '../components/css/ProjectPage.css'
import useLazy from '../custom/useLazy'
const SidebarFilter=lazy(() => import('../components/SidebarFilter'));
const Project=lazy(() => import('../components/Project'));


function Projects (props) {
  const context = useAppContext();
  //first take data from context
  //check which filter is there
  //based on the filter make filterData
  const data = context.projects
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
      <Banner title='Projects' />
      <ComponentSection className='projects-section' title='All projects'>
        
        {
          useLazy(<SidebarFilter
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
          />)
        }

        <div className='project-container'>
          {filterData.length > 0
            ? filterData.map((item, index) => (
                <Suspense fallback="Loading..."><Project key={item.id} data={item} /></Suspense>
              ))
            : null}
        </div>
      </ComponentSection>
    </div>
  )
}

export default Projects
