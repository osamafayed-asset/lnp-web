import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch , Link} from 'react-router-dom';
import Home from './components/Home/Home.component'
import About from './components/About/About.component'
import Error from './components/Error/404.component'
import Header from './components/Header/Header.component'
import Footer from './components/Footer/Footer.component'
import FaqComponent from './components/FAQ/Faq.component';
import LicenseQuery from './components/LicenseQuery/LicenseQuery.component';
import Login from './components/Login/LoginForm.component';
import Auth from './components/Auth/Auth.component';

function App() {
  return (
    <main>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={FaqComponent} />
        <Route path="/licensequery" component={LicenseQuery} />
        <Route path="/login" component={Login} />
        <Route path="/auth" component={Auth}/>
        <Route component={Error} />
      </Switch>
      <Footer></Footer>
    </main>
  );
}
  
export default App;
