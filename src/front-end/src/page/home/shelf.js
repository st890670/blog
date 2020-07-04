import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hashtag from 'component/hashtag'
import React, { useEffect, useState } from 'react'
import api from 'utils/api'
import { useHistory } from 'react-router-dom'
export default () => {
  const history = useHistory()
  const [hashtags, setHashtags] = useState([])

  useEffect(() => {
    loadLatestHashtags()
  }, [])

  async function loadLatestHashtags () {
    const { data } = await api.get({}, 'hashtag', 'newest')
    setHashtags(data)
  }

  function handleGithubClick () {
    window.open('https://github.com/st890670', '_blank')
  }

  return (
    <div className='shelf'>

      <div className='w-100'>
        <h6>夢想成為有六塊肌的歐巴工程師，現實面卻在工作跟微薄薪水的摧殘下，成為了吃完優格要舔爆蓋子的肥宅</h6>
      </div>

      <hr />

      <div className='d-flex flex-column'>
        <h5 className='shelf-title'>最新標籤</h5>
        <div>
          {
            hashtags.map(rowData => (
              <Hashtag
                key={rowData.id}
                name={rowData.name}
              />
            ))
          }
        </div>
      </div>

      <hr />

      <div className='shelf-social'>
        <h5 className='shelf-title'>社群</h5>
        <div>
          <FontAwesomeIcon
            className='shelf-social-icon'
            icon={faGithub}
            size='lg'
            title='Github'
            onClick={handleGithubClick}
          />
        </div>
      </div>

    </div>
  )
}
