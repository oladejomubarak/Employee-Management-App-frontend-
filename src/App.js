import logo from './logo.svg';
import './App.css';
import ListEmployeeComponents from './components/ListEmployeeComponent';
import './styles/style.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
    <div className="container">
      <ListEmployeeComponents />   
    </div>
    <FooterComponent />
    </div>
  );
}

export default App;
