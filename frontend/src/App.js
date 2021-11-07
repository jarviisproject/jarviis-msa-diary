import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom'
import { Home, Navigation, Test } from 'features/common/index';
import { Dairy } from 'features/dairy/index'
import { Garden, Flower } from 'features/garden/index'
import { Goal } from 'features/goal/index'
import { Review } from 'features/review/index'
import { History} from 'features/history'

function App() {
  return (<>
  {/* <Home/> */}
  <Navigation/>
  {/* <Test/> */}
  <Switch>
    <Route exact path='/' component= { Home }/>
    <Redirect from='/home' to= { '/' }/>
    <Route exact path='/history' component= { History }/>
    <Route exact path='/dairy' component= { Dairy }/>
    <Route exact path='/garden' component= { Garden }/>
    <Route exact path='/goal' component= { Goal }/>
    <Route exact path='/review' component= { Review }/>
  </Switch>
  </>);
}

export default App;
