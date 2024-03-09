import '../components/css/CategoryTabs.css'
import { useState } from 'react'
import useExpertice from '../custom/useExpertice'
import Project from './Project'
import { useNavigate } from 'react-router-dom';
function ExperienceTabs ({ data }) {
  const experience = useExpertice(data);
  const [experienceActive, setExperienceActive] = useState(experience[0]);
  const [searchText, setSearchText] = useState('');
  const navigate=useNavigate();

  const handleSearch = e => {
    if (e.keyCode === 13) {
      if (searchText) {
        console.log(searchText);
        navigate(`/projects/search/#${searchText}`);
      }
    }
  }

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
        <input
          type='text'
          placeholder='Search Project'
          onKeyDown={e => {
            handleSearch(e)
          }}
          value={searchText}
          onChange={e => {
            setSearchText(e.target.value)
          }}
          className='searchProjectInput'
        />
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
