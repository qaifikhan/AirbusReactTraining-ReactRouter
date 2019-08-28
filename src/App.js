import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Topbar from './Components/Navigation/Topbar/Topbar';
import HomePage from './Containers/HomePage/HomePage';
import Login from './Containers/LoginPage/LoginPage';
import About from './Containers/About/About';
import DetailPage from './Containers/DetailsPage/DetailsPage';
import NotFound from './Components/NotFound/NotFound';
import {ABOUT_PAGE_URL, LOGIN_PAGE_URL, DETAILS_PAGE_URL} from './Utilities/RouteEndpoints';

class App extends Component{
  state = {
    userLoggedIn: true,
    totalLikes: 0
  }

  onIncrementTotalLikes = () => {
    let updatedVal = this.state.totalLikes + 1;
    this.setState({totalLikes: updatedVal})
  }

  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Topbar totalLikes={this.state.totalLikes} />

            <Switch>
              <Route path={ABOUT_PAGE_URL} component={About} />
              <Route path={LOGIN_PAGE_URL} component={Login} />
              <Route path={DETAILS_PAGE_URL + ':userId'} render={(props) => {
                return this.state.userLoggedIn ? <DetailPage {...props} onIncrementClick={this.onIncrementTotalLikes} /> : <Redirect to={LOGIN_PAGE_URL} />
              }} />
              <Route exact path='/' render={() => <HomePage onIncrementClick={this.onIncrementTotalLikes} />} />
              <Route render={() => <NotFound userLoggedIn={true} />} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
