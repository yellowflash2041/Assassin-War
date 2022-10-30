import { connect } from 'react-redux';

const ErrorMessage = ({ error }) => (
  <>
    { error.message && <div className="error">{error.message.message}</div> }
  </>
);

export default connect(store => ({ error: store.error }))(ErrorMessage);