import React from 'react'
import { Link } from 'react-router-dom'
import Search from 'page/search/index.js'

export default () => {
  return (
    <div className='menu'>
      <Link className='menu-logo remove-a' to='/'>Jason隨筆寫寫</Link>
      <div className='menu-tools'>
        <Search />
      </div>
    </div>
  )
}
