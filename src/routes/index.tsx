import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';

import { Profile } from '../pages/Profile';
import { Search } from '../pages/Search';

import { useUser } from '../hooks/user';

export default function Routes() {
  const { isWide } = useUser();

  return (
    <BrowserRouter>
      <ColorModeSwitcher
        position="absolute"
        right="5"
        top={isWide ? '0' : '10'}
        fontSize={isWide ? '18' : '60'}
      />
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
