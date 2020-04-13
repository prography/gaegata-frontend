import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from 'lib/routes';
import SideBar from 'components/SideBar/index';
import styled from 'styled-components';

const PageWrap = styled.div`
  padding-left:300px;
`;

const Root: React.FC = () => {
  return (
    <Router>
      <Suspense fallback="loading...">
        <SideBar />
        <Switch>
          <PageWrap>
            {routes.map(({ path, page, exact }, i) => (
              <Route exact={exact} path={path} component={page} key={i} />
            ))}
          </PageWrap>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Root;
