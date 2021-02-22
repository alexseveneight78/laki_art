
import Header from './components/header/header';

import Main from './components/blocks/main/main';
import Services from './components/blocks/services/services';
import Portfolio from './components/blocks/portfolio/portfolio'
import Reviews from './components/blocks/reviews/reviews';
import Showroom from './components/blocks/showroom/showroom';
import About from './components/blocks/about/about'

import Footer from './components/footer/footer';

import './app.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Services />
      <Portfolio />
      <Reviews />
      <Showroom />
      <About />
      <Footer />
    </div>
  );
}

export default App;
