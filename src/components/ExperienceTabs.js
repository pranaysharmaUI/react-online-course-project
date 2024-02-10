import '../components/css/CategoryTabs.css'
import { useState } from 'react'
import useExpertice from '../custom/useExpertice'
import Project from './Project'
function ExperienceTabs ({ data }) {
  const experience = useExpertice(data);
  const [experienceActive, setExperienceActive] = useState(experience[0])

  return (
    <div className='tab-container'>
      <div className='tab-header'>
        <ul>
          {experience && experience.length > 0
            ? experience.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setExperienceActive(item)
                    }}
                    className={item === experienceActive ? 'active' : ''}
                  >
                    {item}
                  </li>
                )
              })
            : null}
        </ul>
      </div>
      <div className='tab-content-container'>
        {experience && experience.length > 0
          ? experience.map((item, index) => {
              return (
                <div
                  data-experience={item}
                  key={index}
                  className={
                    experienceActive === item
                      ? 'tab-content active'
                      : 'tab-content'
                  }
                >{

                    data && data.length > 0 ?
                    data.map((project,index) =>{
                        if(project.experience === item )
                        {
                            return(<Project key={project.id} data={project} />)
                        }
                    })
                    : null

                }</div>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default ExperienceTabs
