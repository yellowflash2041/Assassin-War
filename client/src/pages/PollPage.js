import ErrorMessage from './../components/ErrorMessage';
import Poll from './../components/Poll';

const PollPage = ({ getPoll, match }) => {
  getPoll(match.params.id);

  return (
    <div>
      <ErrorMessage />
      <Poll />
    </div>
  );
};

export default PollPage;