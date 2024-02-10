import useCategory from '../custom/useCategory'
import '../components/css/CategoryTabs.css'
import { useState } from 'react'
import Course from './Course'
function CategoryTabs ({ data }) {
  const category = useCategory(data)
  const [categoryActive, setCategoryActive] = useState(category[0])

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
      </div>
      <div className='tab-content-container'>
        {category && category.length > 0
          ? category.map((item, index) => {
              return (
                <div
                  data-category={item}
                  className={
                    categoryActive === item
                      ? 'tab-content active'
                      : 'tab-content'
                  }
                >{

                    data && data.length > 0 ?
                    data.map((course,index) =>{
                        if(course.category === item )
                        {
                            return(<Course data={course} />)
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

export default CategoryTabs
