import React from 'react'
import NewestArticle from 'page/home/newest-article'
import Shelf from 'page/home/shelf'

export default () => {
  return (
    <div>
      <div className='home-banner'>
        <div className='home-banner-word'>
          <span>我的code裡面總是有很多蟲，那些蟲在系統還沒上線前，就像薛丁格的蟲</span>
        </div>
        <div className='home-banner-logo'>
          <span className='home-banner-logo-up'>Jason</span>
          <span className='home-banner-logo-down'>隨 筆 寫 寫</span>
        </div>
      </div>
      <div className='home-content'>
        <div className='home-content-article'>
          <NewestArticle />
        </div>
        <div className='home-content-shelf'>
          <Shelf />
        </div>
      </div>
    </div>
  )
}
