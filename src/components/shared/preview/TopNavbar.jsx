import './TopNavbar.scss'
import MemberIcon from '../../../assets/icons/preview/member.svg'
import TodoIcon from '../../../assets/icons/preview/todo.svg'


function TopNavbar () {
  return (
    <div className='top-navbar'>
      <div className='navigation'>
        <i className='nav-link home'>
          <img src={MemberIcon} alt="Member" />
        </i>
        <i className='nav-link'>
        <img src={TodoIcon} alt="Todo" />
        </i>
      </div>
    </div>
  );
}

export default TopNavbar
