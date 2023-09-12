import {TiTick} from 'react-icons/ti'
import Header from '../Header'

import './index.css'

const Shopify = () => (
  <>
    <Header />
    <div className="ShopifyMainContainer">
      <div className="ContainerButtonPara">
        <button className="PayMonthButton" type="button">
          Pay Monthly
        </button>
        <p className="PayYearlyPara">Pay Yearly (Save 25%)</p>
      </div>
      <div className="ShopifyRateContainer">
        <div className="SubContainers Container-color">
          <div className="MostPopularContainer">
            <p className="MostPopularHeading">MOST POPULAR</p>
          </div>

          <div className="top-container">
            <h1 className="BasicHeading">Basic</h1>
            <p className="BasicPara">FOR INDIVIDUALS & SMALL BUSINESSES</p>
            <p className="BasicPara2">
              Everything you need to create your store, shop products, process
              payments
            </p>
            <h1 className="RateHeading">
              ₹ 1,994
              <span className="RatingSpan">
                INR
                <br />
                /mo
              </span>
            </h1>
          </div>
          <p className="Months3Para">Get your first 3 months for ₹20/mo</p>
          <div className="BottomContainer">
            <p className="BasicPara">What&apos;s includes on Basic</p>
            <ul className="ul-styling">
              <li className="list-style">
                <TiTick color="#8dd88d" />
                <p className="list-para">Basic reports</p>
              </li>
              <li className="list-style">
                <TiTick color="#8dd88d" />
                <p className="list-para">Up to 1,000 inventory locations</p>
              </li>
              <li className="list-style">
                <TiTick color="#8dd88d" />
                <p className="list-para">2 staff accounts</p>
              </li>
            </ul>
            <button className="HeaderButton Btn-style" type="button">
              Try for free
            </button>
          </div>
        </div>

        <div className="SubContainers margin">
          <div className="top-container">
            <h1 className="BasicHeading">Shopify</h1>
            <p className="BasicPara">FOR SMALL BUSINESSES</p>
            <p className="BasicPara2">
              Level up your business with professional reporting and more staff
              accounts
            </p>
            <h1 className="RateHeading">
              ₹ 7,477
              <span className="RatingSpan">
                INR
                <br />
                /mo
              </span>
            </h1>
          </div>
          <p className="Months3Para">Get your first 3 months for ₹20/mo</p>
          <div className="BottomContainer">
            <p className="BasicPara">What&apos;s includes on Shopify</p>
            <ul className="ul-styling">
              <li className="list-style">
                <TiTick color="#8dd88d" />
                <p className="list-para">Professional reports</p>
              </li>
              <li className="list-style">
                <TiTick color="#8dd88d" />
                <p className="list-para">Up to 1,000 inventory locations</p>
              </li>
              <li className="list-style">
                <TiTick color="#8dd88d" />
                <p className="list-para">5 staff accounts</p>
              </li>
            </ul>
            <button className="HeaderButton Btn-style" type="button">
              Try for free
            </button>
          </div>
        </div>

        <div className="SubContainers margin">
          <div className="top-container">
            <h1 className="BasicHeading">Advanced</h1>
            <p className="BasicPara">FOR MEDIUM TO LARGE BUSINESSES</p>
            <p className="BasicPara2">
              Get the best of Shopify with the custom reporting and our lowest
              transaction fees
            </p>
            <h1 className="RateHeading">
              ₹ 30,164
              <span className="RatingSpan">
                INR
                <br />
                /mo
              </span>
            </h1>
          </div>
          <p className="Months3Para">Get your first 3 months for ₹20/mo</p>
          <div className="BottomContainer">
            <p className="BasicPara">What&apos;s includes on Advance</p>
            <ul className="ul-styling">
              <li className="list-style">
                <TiTick color="#8dd88d" />
                <p className="list-para">Custom report builder</p>
              </li>
              <li className="list-style">
                <TiTick color="#8dd88d" />
                <p className="list-para">Up to 1,000 inventory locations</p>
              </li>
              <li className="list-style">
                <TiTick color="#8dd88d" />
                <p className="list-para">15 staff accounts</p>
              </li>
            </ul>
            <button className="HeaderButton Btn-style" type="button">
              Try for free
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
)
export default Shopify
