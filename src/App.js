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
      <Router>
        <div className='container'>
        <HeaderComponent />
            <div className="container">
              <Switch>
                <ListEmployeeComponents />
              </Switch>   
            </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
