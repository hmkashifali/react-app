import './CallToAction.scss'
import CallToActionHeaderImage from '../../../assets/images/call-to-action-header.png'

function CallToAction() {
  return (
    <div className='call-to-action-preview'>
      <div className='header-img'>
        <img src={CallToActionHeaderImage} alt="Header" />
      </div>
      <div className='footer'>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          <button className='button'>Learn More</button>
        </a>
      </div>
    </div>
  );
}

export default CallToAction
