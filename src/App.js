// import logo from './logo.svg';
import './App.css';
import ListEmployeeComponents from './components/ListEmployeeComponent';
import './styles/style.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path = "/" exact component={ListEmployeeComponents}></Route>
                <Route path = "/employees" component={ListEmployeeComponents}></Route>
                <Route path = "/add-employee" component={CreateEmployeeComponent}></Route>
              
                </Switch>
                 
            </div>
          <FooterComponent />
      
      </Router>
    </div>
  );
}

export default App;
