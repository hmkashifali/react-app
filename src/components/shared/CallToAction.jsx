import './FeedItem.scss';

function CallToAction (props) {
  return (
    <div className='feed-item'>
      <i className="sort-icon"></i>
      <i className='feed-icon call-to-action'></i>
      <span className='title'>Call to Action</span>
      <div className='actions'>
        <i class="action delete"></i>
        <i class="action preview hidden"></i>
      </div>
    </div>
  );

}
export default CallToAction;
