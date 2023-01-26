import './Sidebar.scss'
import EventsIcon from '../../assets/icons/Events.png'
import ExpandIcon from '../../assets/icons/Expand.png'
import HomeIcon from '../../assets/icons/Home.png'
import HomefeedIcon from '../../assets/icons/Homefeed.png'
import InboxIcon from '../../assets/icons/Inbox.png'
import MemberIcon from '../../assets/icons/Member.png'
import MembersIcon from '../../assets/icons/Members.png'
import ReportsIcon from '../../assets/icons/Reports.png'
import ResourcesIcon from '../../assets/icons/Resources.png'
import ServiceIcon from '../../assets/icons/Service.png'
import UserAvatar from '../../assets/images/Avatar.png'

function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className='expand-collapse-sidebar'>
        <img src={ExpandIcon} className='icon' alt='Expand'></img>
      </div>
      <div className='nav-items'>
        <div className='nav-item'>
          <img src={HomeIcon} className='icon' alt='Home'></img>
        </div>
        <div className='nav-item'>
          <img src={ReportsIcon} className='icon' alt='Reports'></img>
        </div>
        <div className='nav-item'>
          <img src={MemberIcon} className='icon' alt='Member'></img>
        </div>
        <div className='nav-item'>
          <img src={MembersIcon} className='icon' alt='Members'></img>
        </div>
        <div className='nav-item'>
          <img src={InboxIcon} className='icon' alt='Inbox'></img>
        </div>
        <div className='nav-item active'>
          <img src={HomefeedIcon} className='icon' alt='Homefeed'></img>
        </div>
        <div className='nav-item'>
          <img src={EventsIcon} className='icon' alt='Events'></img>
        </div>
        <div className='nav-item'>
          <img src={ServiceIcon} className='icon' alt='Service'></img>
        </div>
        <div className='nav-item'>
          <img src={ResourcesIcon} className='icon' alt='Resources'></img>
        </div>
      </div>
      <div className='user-details'>
        <div className='user-avatar'>
          <img src={UserAvatar} alt="Avatar" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar
