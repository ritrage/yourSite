import MainHeader from './headers/MainHeader.jsx';
import './app.scss';
import Home from './bodies/NormalPages/Home.jsx';
import Services from './bodies/NormalPages/Services.jsx';
import Contact from './bodies/NormalPages/Contact.jsx';
import Footer from './footers/Footer.jsx';

function App() {
  return (
    <div className='App'>
      <MainHeader/>
      <hr className='HR'/>
      <Home/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
