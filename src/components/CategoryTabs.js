import useCategory from '../custom/useCategory'
import '../components/css/CategoryTabs.css'
import { useState } from 'react'
import Course from './Course'
import { useNavigate } from 'react-router-dom'
function CategoryTabs ({ data }) {
  const category = useCategory(data)
  const [categoryActive, setCategoryActive] = useState(category[0])
  const [searchText, setSearchText] = useState('');
  const navigate=useNavigate();

  const handleSearch = e => {
    if (e.keyCode === 13) {
      if (searchText) {
        console.log(searchText);
        navigate(`/courses/search/#${searchText}`);
      }
    }
  }

  return (
    <div className='tab-container'>
      <div className='tab-header'>
        <ul>
          {category && category.length > 0
            ? category.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setCategoryActive(item)
                    }}
                    className={item === categoryActive ? 'active' : ''}
                  >
                    {item}
                  </li>
                )
              })
            : null}
        </ul>
        <input
          type='text'
          placeholder='Search Course'
          onKeyDown={e => {
            handleSearch(e)
          }}
          value={searchText}
          onChange={e => {
            setSearchText(e.target.value)
          }}
          className='searchCourseInput'
        />
      </div>
      <div className='tab-content-container'>
        {category && category.length > 0
          ? category.map((item, index) => {
              return (
                <div
                  data-category={item}
                  key={index}
                  className={
                    categoryActive === item
                      ? 'tab-content active'
                      : 'tab-content'
                  }
                >
                  {data && data.length > 0
                    ? data.map((course, index) => {
                        if (course.category === item) {
                          return <Course key={course.id} data={course} />
                        }
                      })
                    : null}
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default CategoryTabs
