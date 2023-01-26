import './Homefeed.scss'
import { useState } from 'react';
import EditableFeedItems from './EditableFeedItems'
import PreviewDevice from './shared/PreviewDevice'

let feedItemsInitial = [
  { title: 'Call To Action', category: 'callToAction', id: 2, visibility: 'visible' },
  { title: 'Todo', category: 'todo', id: 1, visibility: 'visible' },
]

function Homefeed() {
  let [feedItems, updateFeedItems] = useState(feedItemsInitial)
  let feedItemDeleted = (feedItem) => {
    updateFeedItems(feedItems.filter((item) => item.id !== feedItem.id))
  }
  let visibilityChanged = (feedItem) => {
    let newData = feedItems.map((item) => {
      if(item.id === feedItem.id){
        let newVisibility = 'visible'
        if(newVisibility === feedItem.visibility)
          newVisibility = 'hidden'
        item.visibility = newVisibility
      }
      return item
    })
    updateFeedItems(newData)
  }

  return (
    <div className='Homefeed d-flex'>
      <div className='left-pane'>
        <div className='header'>
          <i className='icon'></i>
          <span className='title'>
            Homefeed
          </span>
          <div className='actions'>
            <span className='action add-feed'></span>
          </div>
        </div>
        { livePreviewDropdown() }

        <div className='hr-line'></div>

        <div className='feed-items'>
          <div className='feed-item'>
            <i className='feed-icon call-to-action'></i>
            <span className='title'>Call to Action</span>
          </div>

          <div className='feed-item'>
            <i className='feed-icon todo'></i>
            <span className='title'>Todo</span>
          </div>
        </div>
      </div>

      <div className='right-pane d-flex'>
        <div className='feed-sorting'>
          <EditableFeedItems feedItems={feedItems} onDelete={ feedItemDeleted } onVisibilityChange={visibilityChanged} />
        </div>
        <section className='preview-section'>
          <PreviewDevice feedItems={feedItems} />
        </section>
      </div>
    </div>
  );
}

let livePreviewDropdown = () => {
  return (
    <div className='live-preview-dd'>
      <span className='icon'></span>
      <span className='title'> Live Preview </span>

      <div className='dropdown'>
        <div className='dropdown-item'>
          <div className='feed-item'>
            <i className='feed-icon call-to-action'></i>
            <span className='title'>Call to Action</span>
          </div>
        </div>

        <div className='dropdown-item'>
          <div className='feed-item'>
            <i className='feed-icon todo'></i>
            <span className='title'>Todo</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homefeed
