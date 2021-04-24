import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Profile } from '../pages/Profile';
import { Search } from '../pages/Search';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
