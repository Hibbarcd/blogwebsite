import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/header.component'
import StartPage from './pages/startPage/startpage.component'
import BlogPage from './pages/blogPage/blogpage.component'
import './App.css';

class App extends React.Component {
  render() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Header />
            <Route>
            <Switch>
                <Route exact path='/' component={StartPage} />
                <Route exact path='/blog' component={BlogPage} />
            </Switch>
            </Route>
    </div>
  );
  }
}

export default App;
