import React, {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "./routes"
import {Navbar} from "./components/Navbar"
import {Switch, Route, Redirect} from 'react-router-dom'
import {HomePage} from "./pages/Home"
import {Experience} from './pages/Experience'
import {Works} from './pages/Works'
import {Contacts} from './pages/Contacts'
import {Loader} from "./components/Loader";
import Footer from './components/Footer'
import 'materialize-css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/home');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  
render() {
  
    return (
      <>
        <Router>
            { <Navbar />}
            <div className="container">
            <Switch>
                <Route path="/home" exact>
                    <HomePage />
                </Route>
                <Route path="/experience" component={Experience} />
                <Route path="/works" component={Works} />
                <Route path="/contacts" component={Contacts} />
                <Redirect to="/home" />
            </Switch>
            </div>
        </Router>
        <Footer />
        </>
    );
  }
}

export default App;