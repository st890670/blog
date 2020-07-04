import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { base64ToImage } from 'utils/file'
import ReactMarkdown from 'react-markdown'
import api from 'utils/api'
import ImageNotFound from 'img/image-not-found-01.png'

export default () => {
  const history = useHistory()

  const [articles, setArticles] = useState([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    (async () => {
      await loadNewestArticles()
      setReady(true)
    })()
  }, [])

  async function loadNewestArticles () {
    const { data } = await api.get({}, 'article', 'newest')
    setArticles(data)
  }

  const imageUrl = (imageName, imageContent) => imageContent ? URL.createObjectURL(base64ToImage(imageContent, imageName)) : ImageNotFound

  return ready && (
    <div className='w-100'>
      <div className='row no-gutters'>
        {
          articles.map(article => (
            <div
              key={article.id}
              className='col-xl-6 col-sm-12 newest-article-card-block'
            >
              <div
                className='newest-article-card'
                onClick={() => history.push(`/article/${article.id}`)}
              >
                <img className='newest-article-card-img' src={imageUrl(article.imageName, article.imageContent)} alt='文章圖片' />
                <h5 className='newest-article-card-title'>{article.title}</h5>
                <div className='newest-article-card-description'>
                  <ReactMarkdown>{article.content}</ReactMarkdown>
                </div>
                <div className='newest-article-card-bottom'>
                  <Link to={`/article/${article.id}`}>點一下閱讀更多</Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
