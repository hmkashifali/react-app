import './FeedItem.scss';

function FeedItem (props) {
  let feedItem = props.feedItem
  let className = 'todo'

  let deleteFeedItem = () => {
    props.onDelete(feedItem)
  }

  let changeVisibility = () => {
    props.onVisibilityChange(feedItem)
  }

  if(feedItem.category === 'callToAction')
    className = 'call-to-action'

    return (
    <div className='feed-item editable'>
      <span className="sort-icon"></span>
      <i className={`feed-icon ${className}`}></i>
      <span className='title'>{ feedItem.title }</span>
      <div className='actions'>
        <i className="action delete" onClick={ deleteFeedItem }></i>
        <i className={`action preview ${feedItem.visibility}`} onClick={ changeVisibility }></i>
      </div>
    </div>
  );

}
export default FeedItem;
