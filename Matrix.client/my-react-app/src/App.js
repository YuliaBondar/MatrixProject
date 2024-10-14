import './App.css';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Form from './shared/Form/Form'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import OurWork from './components/OurWork/OurWork'
import YorQuestions from './components/YourQuestions/Questions'

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="App-content">
        {/* <Form /> */}
      <OurWork/>
      <YorQuestions/>
      

      </div>
      <Footer />
    </div>
  );
}
export default App;
