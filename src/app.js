
import Header from './components/header/header';

import Main from './components/blocks/main/main';
import Services from './components/blocks/services/services';

import Footer from './components/footer/footer';

import './app.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
