import './App.scss';
import Landing from './components/landing/Landing.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar from './components/landing/header/Navbar.js';
import Footer from './components/landing/footer/Footer.js';
import useEagerConnect from './hooks/useEagerConnect'
import Staking from './components/landing/staking/Staking';
import Unlinked from './components/landing/unlinked/Unlinked';
import Stakednft from './components/landing/staked-nfts/Stakednft';
import UnstakedNfts from './components/landing/unstaked-nfts/UnstakedNfts';
import Mintingn from './components/Minting/Minting';

function App() {
  useEagerConnect()
  return (
    <>
          <Router>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/staking' component={Staking} />
              <Route exact path='/unlinked' component={Unlinked} />
              <Route exact path='/Stakednft' component={Stakednft} />
              <Route exact path='/UnstakedNfts' component={UnstakedNfts} />
              <Route exact path='/Minting' component={Mintingn} />
            </Switch>
            <Footer/>
          </Router>
    </>
  );
}

export default App;
