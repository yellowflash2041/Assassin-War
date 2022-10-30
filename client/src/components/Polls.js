import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPolls, getUserPolls } from '../store/actions';

const Polls = ({ auth, getPolls, getUserPolls, history, polls }) => {
  useEffect(() => {
    getPolls();
  });

  const Polls = polls.map(poll => (
    <li onClick={() => history.push(`/poll/${poll._id}`)} key={poll._id}>
      {poll.question}
    </li>
  ));

  return (
    <>
      {auth.isAuthenticated && (
        <div className="buttons_center">
          <button className="button" onClick={getPolls}>
            All polls
          </button>
          <button className="button" onClick={getUserPolls}>
            My polls
          </button>
        </div>
      )}
      <ul className="polls">{Polls}</ul>
    </>
  );
}

export default connect(
  store => ({
    auth: store.auth,
    polls: store.polls
  }),
  { getPolls, getUserPolls }
)(Polls);