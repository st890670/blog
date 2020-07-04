import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

export default ({ msg, className }) => {
  return (
    <div className={`${className} alert`}>
      <FontAwesomeIcon icon={faExclamationCircle} />
      <span className='ml-3'>{msg}</span>
    </div>
  )
}
