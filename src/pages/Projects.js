import { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext'
import Banner from '../components/Banner'
import ComponentSection from '../components/ComponentSection'
import Project from '../components/Project'
import SidebarFilter from '../components/SidebarFilter'
import '../components/css/ProjectPage.css'

function Projects (props) {
  const context = useContext(AppContext)
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
        />
        <div className='project-container'>
          {filterData.length > 0
            ? filterData.map((item, index) => (
                <Project key={item.id} data={item} />
              ))
            : null}
        </div>
      </ComponentSection>
    </div>
  )
}

export default Projects
