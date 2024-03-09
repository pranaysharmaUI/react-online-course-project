// based on search term return courses
//search based on category or technologies

import Course from '../components/Course'
import Project from '../components/Project'
import { useAppContext } from '../context/AppContext'

export function useCourseSearch (search) {
  const { courses } = useAppContext()
  let output = []
  return (
    <div className='course-container'>
      {courses.filter((item, index) => {
        if (
          item.technologies.includes(search) ||
          item.category.includes(search)
        ) {
          output.push(<Course data={item} />)
        }
      })}
      {output.length > 0 ? output : <p>{`No results found for ${search}`}</p>}
    </div>
  )
}


export function useProjectSearch (search) {
    const { projects } = useAppContext()
    let output = []
    return (
      <div className='course-container'>
        {projects.filter((item, index) => {
          if (
            item.technologies.includes(search) ||
            item.experience.includes(search)
          ) {
            output.push(<Project data={item} />)
          }
        })}
        {output.length > 0 ? output : <p>{`No results found for ${search}`}</p>}
      </div>
    )
  }
