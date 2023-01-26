
import './PreviewDevice.scss'
import CallToActionPreview from './preview/CallToAction'
import TodoPreview from './preview/Todo'
import BottomNav from './preview/BottomNav'
import MessagePlaceholder from './preview/MessagePlaceholder'
import GroupRSVPlaceholder from './preview/GroupRSVPPlaceholder'
import TopNavbar from './preview/TopNavbar'

function PreviewDevice (props) {
  let feedItems = props.feedItems

  return (
    <div className='preview-device'>
      <div className='viewport'>
        <div className='main'>
          <TopNavbar />
          <div className='body'>
            <div className='data-section'>
              <span className='title'>New Messages</span>
              <MessagePlaceholder />
            </div>

            <div className='data-section'>
              <span className='title'>Group RSVPS</span>
              <GroupRSVPlaceholder />
              <div className='hr-line'></div>
            </div>
            {
              feedItems.map((feedItem) => {
                if(feedItem.visibility === 'hidden')
                  return null;
                let child = null
                if(feedItem.category === 'todo')
                  child = <TodoPreview key={feedItem.id}/>
                else if(feedItem.category === 'callToAction')
                  child = <CallToActionPreview key={feedItem.id}/>
                return child
              })
            }
          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  );
}

export default PreviewDevice
