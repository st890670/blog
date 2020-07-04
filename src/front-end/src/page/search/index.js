import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { SEARCH_RESULT_ROUTE_CONFIG } from 'page/search-result/config'

export default () => {
  const inputRef = useRef(null)
  const history = useHistory()
  const [expand, setExpand] = useState(false)
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    expand && inputRef.current.focus()
  }, [expand])

  function handleSearchExpand () {
    expand ? search() : setExpand(true)
  }

  function handleKeyDown (e) {
    e.keyCode === 13 && search()
  }

  function handleBlur () {
    if (expand && !keyword) {
      setExpand(false)
    }
  }

  async function search () {
    if (keyword) {
      const urlParams = new URLSearchParams()
      urlParams.append('keyword', keyword)
      history.push(`${SEARCH_RESULT_ROUTE_CONFIG.path}/?${urlParams.toString()}`)
    }
  }

  return (
    <div className={expand ? 'search' : 'search search-not-expand'}>
      <input
        ref={inputRef}
        className={`search-input ${expand ? '' : 'd-none'}`}
        placeholder='文章標題或Hashtag關鍵字'
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
      />
      <FontAwesomeIcon
        icon={faSearch}
        className='search-icon'
        onClick={handleSearchExpand}
      />
    </div>
  )
}
