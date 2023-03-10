import './global-styles/global.css';
import Header from './components/Header/Header';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './pages/Page404';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </Router>
    </div>

  );
}

export default App;
