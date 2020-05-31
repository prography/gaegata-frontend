import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from 'api/routes';
import SideBar from 'components/SideBar/index';
import styled from 'styled-components';
import { me } from 'store/auth/action';
import { getAuthToken } from 'utils/auth';

const PageWrap = styled.div`
  padding-left: 300px;
`;

const Root: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getAuthToken();

    if (token) {
      dispatch(me(token));
    }
  }, []);

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
