import './BottomNav.scss'
import HomeIcon from '../../../assets/icons/preview/home.svg'
import InboxIcon from '../../../assets/icons/preview/inbox.svg'
import MembersIcon from '../../../assets/icons/preview/members.svg'


function BottomNav() {
  return (
    <div className='bottom-navbar'>
      <div className='navigation'>
        <i className='nav-link home'>
          <img src={HomeIcon} alt="Home" />
        </i>
        <i className='nav-link members'>
          <img src={MembersIcon} alt="Members" />
        </i>
        <i className='nav-link'>
        <img src={InboxIcon} alt="Inbox" />
        </i>
      </div>
      <div className='ios-home-indicator'></div>
    </div>
  );
}

export default BottomNav
