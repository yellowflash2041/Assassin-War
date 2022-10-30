import { Navigate } from 'react-router-dom';

import CreatePoll from './../components/CreatePoll';
import ErrorMessage from './../components/ErrorMessage';

const CreatePollPage = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <ErrorMessage />
      <CreatePoll />
    </div>
  );
};

export default CreatePollPage;