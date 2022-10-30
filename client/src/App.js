import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import decode from 'jwt-decode';

import NavBar from './containers/NavBar';
import RouteViews from './containers/RouteViews';
import { setToken, setCurrentUser, addError } from './store/actions';
import { store } from './store';
import './App.css';

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <NavBar />
          <RouteViews />
        </>
      </Router>
    </Provider>
  );
}

export default App;
