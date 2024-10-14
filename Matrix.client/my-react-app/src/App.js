import './App.css';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Form from './shared/Form/Form'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import AboutUs from './blocks/AboutUs/AboutUs.jsx'
import Services from './blocks/ServicesForPeople/Services.jsx'
import Application from './blocks/Application/Application.jsx'
function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="App-content">
       
      <AboutUs/>
      <Services/>
      <Application/>

      </div>
      <Footer />
    </div>
  );
}
export default App;
