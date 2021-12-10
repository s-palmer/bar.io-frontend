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
    <div className='social-container'>
      <div>
      <h3>@makersacademy</h3>
      
      </div>
      <a 
      href='https://github.com/makersacademy' className="social gitHub"
      >
      <FontAwesomeIcon icon={faGithub} size='2x' />
      </a>
      <a 
      href='https://reactjs.org/' className="social react"
      >
      <FontAwesomeIcon icon={faReact} size='2x' />
      </a>
      <a 
      href='https://nodejs.org/en/' className="social node"
      >
      <FontAwesomeIcon icon={faNode} size='2x' />
      </a>
      <a 
      href='https://cloud.google.com/apis/docs/overview' className="social google"
      >
      <FontAwesomeIcon icon={faGoogle} size='2x' />
      </a>
    </div>
    
  )
}

export default SocialFollow;