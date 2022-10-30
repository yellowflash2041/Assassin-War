import { useState } from 'react';
import { connect } from 'react-redux';

import { authUser, logout } from './../store/actions';

const Auth = ({ authType, authUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    authUser(authType || 'login', { username, password });
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="username">
          username
        </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="form-input"
          autoComplete="off"
        />
        <label className="form-label" for="password">
          password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="form-input"
          autoComplete="off"
        />
        <div className="buttons_center">
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(() => ({}), { authUser, logout })(Auth);