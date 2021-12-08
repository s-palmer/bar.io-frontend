import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, 
  faReact, 
  faNode, 
  faGoogle
} from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";



const SocialFollow = () => {
  return (
    <div className='social-container' >
      <div>
      <a href='https://makers.tech/'>Swep-iii @makersacademy</a>
      </div>
      <br/>
      <a 
      href='https://github.com/makersacademy' className="social"
      >
      <FontAwesomeIcon icon={faGithub} size='2x' />
      </a>
      <a 
      href='https://reactjs.org/' className="social"
      >
      <FontAwesomeIcon icon={faReact} size='2x' />
      </a>
      <a 
      href='https://nodejs.org/en/' className="social"
      >
      <FontAwesomeIcon icon={faNode} size='2x' />
      </a>
      <a 
      href='https://cloud.google.com/apis/docs/overview' className="social"
      >
      <FontAwesomeIcon icon={faGoogle} size='2x' />
      </a>
    </div>
    
  )
}

export default SocialFollow;