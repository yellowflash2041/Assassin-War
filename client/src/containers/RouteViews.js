import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import withRouter from './../components/withRouter';
import AuthPage from './../pages/AuthPage';
import CreatePollPage from './../pages/CreatePollPage';
import HomePage from './../pages/HomePage';
import PollPage from './../pages/PollPage';
import TestPage from './../pages/TestPage';
import { getCurrentPoll } from './../store/actions';

const RouteViews = ({ getCurrentPoll, auth }) => (
  <main className="container">
    <Routes>
      <Route exact path="/" render={ props => <HomePage { ...props } /> } />
      <Route
        exact
        path="/login"
        render={() => (
          <AuthPage authType="login" isAuthenticated={auth.isAuthenticated} />
        )}
      />
      <Route
        exact
        path="/register"
        render={() => (
          <AuthPage
            authType="register"
            isAuthenticated={auth.isAuthenticated}
          />
        )}
      />
      <Route
        exact
        path="/poll/new"
        render={() => <CreatePollPage isAuthenticated={auth.isAuthenticated} />}
      />
      <Route
        exact
        path="/poll/:id"
        render={props => (
          <PollPage getPoll={ id => getCurrentPoll(id) } {...props} />
        )}
      />
      <Route exact path="/test" render={() => <TestPage />} />
    </Routes>
  </main>
);

export default withRouter(
  connect(
    store => ({
      auth: store.auth
    }),
    { getCurrentPoll }
  )(RouteViews)
);