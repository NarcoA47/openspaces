import React from 'react'
import '../styles/filters.css'
import FilterItem from './FilterItem'


function Filters({filterList}) {


  return (
    <div className='max-width filters cursor-pointer'>
      {filterList && filterList.map((filter)=>{
        return (
            <FilterItem filter={filter} key={filter.id} />
        )
      })}
    </div>
  )
}

export default Filters
