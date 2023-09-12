import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Basic from './components/Basic'
import Shop from './components/ShopifyR'
import Advance from './components/Adavnce'
import Shopify from './components/Shopify'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Shopify />
    <Switch className="HeightSet">
      <Route exact path="/Basic" component={Basic} />
      <Route exact path="/Shopify" component={Shop} />
      <Route exact path="/Advance" component={Advance} />
    </Switch>
  </BrowserRouter>
)

export default App
