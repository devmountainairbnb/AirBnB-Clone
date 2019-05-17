import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom'

//IMPORTED COMPONENTS
import Home from './components/Home/Home.jsx'
import FilteredHomes from './components/FilteredHomes/FilteredHomes.jsx'
import UnfilteredHomes from './components/UnfilteredHomes/UnfilteredHomes.jsx'
import Listing from './components/Listing/Listing'
import NewProperty from './components/NewProperty/NewProperty.jsx'
import NewPropConfirm from './components/NewPropConfirm/NewPropConfirm'

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/filteredHomes" component={FilteredHomes} /> */}
          <Route path="/filteredHomes/:city_id" component={FilteredHomes} />
          <Route path="/unfilteredHomes" component={UnfilteredHomes} />
          <Route path="/listing/:property_id" component={Listing} />
          <Route path="/newProperty" component={NewProperty} />
          <Route path="/propertyConfirm" component={NewPropConfirm} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
