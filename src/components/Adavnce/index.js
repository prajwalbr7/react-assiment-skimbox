import {TiTick} from 'react-icons/ti'
import './index.css'

const Advance = () => (
  <>
    <div className="BasicMainContainer">
      <h1 className="Basic1Heading">
        ₹ 30,164
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
      <p className="BasicParaBR">What&apos;s includes on Advance</p>
      <ul className="ul-stylingR">
        <li className="list-styleR">
          <TiTick color="#8dd88d" />
          <p className="list-paraR">Custom report builder</p>
        </li>
        <li className="list-styleR">
          <TiTick color="#8dd88d" />
          <p className="list-paraR">Up to 1,000 inventory locations</p>
        </li>
        <li className="list-styleR">
          <TiTick color="#8dd88d" />
          <p className="list-paraR">15 staff accounts</p>
        </li>
      </ul>
      <button className=" Btn-styleR" type="button">
        Try for free
      </button>
    </div>
  </>
)
export default Advance
