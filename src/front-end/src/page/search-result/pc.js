import { Link } from 'react-router-dom'
import Hashtag from 'component/hashtag'
import ImageNotFound from 'img/image-not-found-01.png'
import Markdown from 'component/markdown'
import { base64ToImage } from 'utils/file'

export default ({ article }) => {
    const imageUrl = (imageName, imageContent) => imageContent ? URL.createObjectURL(base64ToImage(imageContent, imageName)) : ImageNotFound

    return (
        <>
            <div className='col-4 w-100 h-100 p-3'>
                <div className='h-75 p-3'>
                    <img className='search-result-img' src={imageUrl(article.imageName, article.imageContent)} />
                </div>

                <div className='h-25'>
                    {
                        article.hashtags.map((hashtag, index) => (
                            <Hashtag
                                key={index}
                                name={hashtag}
                            />
                        ))
                    }
                </div>
            </div>
            <div className='col-8 p-3 h-100'>
                <div className='h-25'>
                    <h3>
                        <Link to={`/article/${article.id}`}>
                            {article.title}
                        </Link>
                    </h3>
                </div>
                <div className='h-75 overflow-hidden'>
                    <Markdown source={article.content} />
                </div>
            </div>
        </>
    )
}