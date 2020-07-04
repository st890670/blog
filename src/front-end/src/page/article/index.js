import Markdown from 'component/markdown'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from 'utils/api'
import { longToString } from 'utils/datetime'
import { base64ToImage } from 'utils/file'
import Hashtag from 'component/hashtag'
import ImageNotFound from 'img/image-not-found-01.png'

export default () => {
  const articleId = useParams().articleId
  const [ready, setReady] = useState(false)
  const [form, setForm] = useState({})

  useEffect(() => {
    (async () => {
      await loadData()
      setReady(true)
    })()
    // eslint-disable-next-line
  }, [])

  async function loadData () {
    const { data } = await api.get({}, 'article', articleId)
    setForm(data)
  }

  const imageUrl = (imageName, imageContent) => imageContent ? URL.createObjectURL(base64ToImage(imageContent, imageName)) : ImageNotFound
  return ready && (
    <div className='article'>

      <div className='article-img'>
        <img src={imageUrl(form.imageName, form.imageContent)} alt='文章圖片' />
      </div>

      <h1>{form.title}</h1>

      <div className='article-subtitle'>
        <span>{longToString(form.modifiedDate)}</span>
      </div>

      <div className='mt-3'>
        {
          form.hashtags.map((hashtag, index) => (
            <Hashtag
              key={index}
              name={hashtag}
            />
          ))
        }
      </div>

      <div className='article-content my-3'>
        <Markdown source={form.content} />
      </div>

    </div>
  )
}
