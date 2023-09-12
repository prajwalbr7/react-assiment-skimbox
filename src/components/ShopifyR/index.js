import {TiTick} from 'react-icons/ti'
import './index.css'

const Shop = () => (
  <>
    <div className="BasicMainContainer">
      <h1 className="Basic1Heading">
        ₹ 7,477
        <span className="Basic1Span">
          INR
          <br />
          /mo
        </span>
      </h1>
    </div>
    <div className="ContainerBasicBgGreen">
      <p className="BasicParaR">Get your first 3 months for ₹20/mo</p>
    </div>

    <div className="BottomContainerR">
      <p className="BasicParaBR">What&apos;s includes on Shopify</p>
      <ul className="ul-stylingR">
        <li className="list-styleR">
          <TiTick color="#8dd88d" />
          <p className="list-paraR">Professional reports</p>
        </li>
        <li className="list-styleR">
          <TiTick color="#8dd88d" />
          <p className="list-paraR">Up to 1,000 inventory locations</p>
        </li>
        <li className="list-styleR">
          <TiTick color="#8dd88d" />
          <p className="list-paraR">5 staff accounts</p>
        </li>
      </ul>
      <button className=" Btn-styleR" type="button">
        Try for free
      </button>
    </div>
  </>
)
export default Shop
