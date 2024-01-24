// Routes
import RouterContainer from './components/RouterContainer';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// Css
import './assets/css/app.scss';

function App() {
  return (
    <>
      <Header />
      <RouterContainer />
      <Footer />
    </>
  );
}

export default App;
