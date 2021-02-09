import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { usePages } from './screens/Pages/hooks';
import { Pages } from './screens/Pages';
import { Page } from './screens/Pages/screens/Page';
import { NotFound } from './screens/NotFound';

export const Routes = () => {
  const { pages } = usePages();

  return (
    <Switch>
      <Route path="/" exact component={Pages} />
      {pages.map(({ id, path }) => (
        <Route
          key={path}
          exact
          path={`/${path}`}
          component={() => <Page id={id} />}
        />
      ))}
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
