import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';
import { LoginApi } from './request';
import Home from './components/Home';
import styled from 'styled-components/macro';

export const AppContainer = styled.div`
  height: 100%;
  width: 100%;
`;

function App() {
  useEffect(() => {
    LoginApi.login({ username: 'superuser', password: '123456' }).then(
      (res) => {
        console.log('zkf', res);
      }
    );
  }, []);
  return (
    <AppContainer>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={() => <Home content="home page" />} />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
