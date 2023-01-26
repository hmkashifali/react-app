import './MessagePlaceholder.scss'

function MessagePlaceholder() {
  return (
    <div className='dummy-message-row'>
      <div className='avatar'></div>
      <div className='details'>
        <div className='title placeholder'></div>
        <div className='message placeholder'></div>
      </div>
    </div>
  );
}

export default MessagePlaceholder
