import { Link } from 'react-router-dom'
import Hashtag from 'component/hashtag'

export default ({ article }) => {
    return (
        <>
            <h3>
                <Link to={`/article/${article.id}`}>
                    {article.title}
                </Link>
            </h3>

            {
                article.hashtags.map((hashtag, index) => (
                    <Hashtag
                        key={index}
                        name={hashtag}
                    />
                ))
            }
        </>
    )
}