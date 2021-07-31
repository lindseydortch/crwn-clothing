import { Switch, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/homepage/Homepage';
import ShopPage from './components/shop/shop';
import Header from './components/header/header';

// HATS PAge ROUTE EXAMPLE 
// const HatsPage = () => {
//   return <div>
//     <h1>HATS PAGE</h1>
//   </div>
// }

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
