import { useHistory } from 'react-router-dom'
import { SEARCH_RESULT_ROUTE_CONFIG } from 'page/search-result/config'

export default props => {
  const history = useHistory()

  function handleSearchHashtag () {
    const urlParams = new URLSearchParams()
    urlParams.append('keyword', props.name)
    history.push(`${SEARCH_RESULT_ROUTE_CONFIG.path}/?${urlParams.toString()}`)
  }

  return (
    <span
      className='hashtag'
      onClick={handleSearchHashtag}
      {...props}
    >#{props.name}
    </span>
  )
}
