import './css/SidebarFilter.css'

function SidebarFilter ({ list, filter, setFilter }) {
  return (
    <div className='sidebar-filter-container'>
      <div className='sidebar-filter-heading'>
        <p>Filter</p>
      </div>
      <div className='sidebar-filter-list'>
        {list.length > 0
          ? list.map(item => (
              <div className='filter-box'>
                <span>{item.type}</span>
                <ul className='sidebar-filter-list'>
                  {item.filter.length > 0
                    ? item.filter.map(filterName => (
                        <li
                          onClick={() => {
                            setFilter({type:item.type,name:filterName})
                          }}
                          className={filter.name === filterName ? 'active' : ''}
                        >
                          {filterName}
                        </li>
                      ))
                    : null}
                </ul>
              </div>
            ))
          : null}
      </div>
    </div>
  )
}

export default SidebarFilter
