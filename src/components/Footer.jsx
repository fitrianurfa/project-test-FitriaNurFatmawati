import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../assets/style.css'

function Footer() {
  return(
  <div className="p-3 bg-dark text-white" >
  <p className="text-center">Copyright © 2016.PT Company</p>
    <div className="text-center mt-2">
      <FontAwesomeIcon icon={faSquareFacebook} className="col-1"/>
      <FontAwesomeIcon icon={faTwitter} />
    </div>
  </div>
  )
}
export default Footer