import React, { Suspense } from 'react';
import PageLoading from 'components/PageLoading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from 'lib/routes';

const Root: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<PageLoading />}>
        <Switch>
          {routes.map(({ path, page, exact }, i) => (
            <Route exact={exact} path={path} component={page} key={i} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Root;
