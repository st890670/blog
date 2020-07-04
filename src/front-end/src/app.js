import Menu from 'page/menu'
import React from 'react'
import Router from 'router'
import RwdToast from 'component/rwd-toast'

export default () => {
  return (
    <span>
      <Menu />
      <div className='container jas-container'>
        <Router />
      </div>
      <RwdToast />
    </span>
  )
}
