import {Link} from 'react-router-dom'
import {BsThreeDotsVertical} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <>
    <div className="HeaderMainContainer">
      <div className="LeftPartContainer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png"
          alt="Shopify"
          className="Header"
        />
        <select className="selectContainer">
          <option>Solutions</option>
          <option>Others</option>
        </select>
        <p className="PricingPara">Pricing</p>
        <select className="selectContainer">
          <option>Resources</option>
          <option>Others</option>
        </select>
      </div>
      <div className="LoginContainer">
        <p className="PricingPara">Log in</p>
        <button className="HeaderButton" type="button">
          Start free trial
        </button>
      </div>
    </div>

    <>
      <div className="MobileHeaderMainContainer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png"
          alt="Shopify"
          className="Header"
        />
        <div className="Container2trail">
          <p className="trialPara">Start free trial</p>
          <BsThreeDotsVertical height="60px" />
        </div>
      </div>
      <div className="RowToItems">
        <Link to="/Basic" className="ItemStyle">
          <h1 className="ItemHeading-style">Basic</h1>
        </Link>

        <Link to="/Shopify" className="ItemStyle">
          <h1 className="ItemHeading-style">Shopify</h1>
        </Link>
        <Link to="/Advance" className="ItemStyle">
          <h1 className="ItemHeading-style">Advance</h1>
        </Link>
      </div>
    </>
  </>
)
export default Header
