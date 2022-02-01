import React from 'react'
import './search-box.style.css'

export const SearchBox =({placeholder,handleChange})=>(
<div>
     {/* <input type='search' placeholder="search monsters" onChange={e => console.log(e.target.value) }></input> */}
     <input
          type="search"
          className='search ' 
          placeholder={placeholder}
          onChange={handleChange}
        />
</div>
)