import Alert from 'component/alert'
import Mobile from 'page/search-result/mobile'
import Pc from 'page/search-result/pc'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import api from 'utils/api'

export default () => {
  const location = useLocation()
  const [articles, setArticles] = useState([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    search(new URLSearchParams(location.search).get('keyword'))
  }, [location.search])

  async function search(keyword) {
    const { data } = await api.get({ keyword }, 'search')
    setArticles(data)
    setReady(true)
  }

  return ready && (
    <div className='mt-3'>
      {
        articles.map((article, index) => (
          <div
            className='search-result mt-3'
            key={index}
          >
            <div className='search-result-pc'>
              <Pc article={article} />
            </div>

            <div className='search-result-mobile'>
              <Mobile article={article} />
            </div>
          </div>
        ))
      }

      {!articles.length && <Alert msg='查無搜尋結果，請更換搜尋條件' />}

    </div>
  )
}
