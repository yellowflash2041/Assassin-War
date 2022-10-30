import { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import { createPoll } from './../store/actions';

const CreatePoll = ({ createPoll }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleAnswer = (e, index) => {
    options[index] = e.target.value;
    setOptions([...options]);
  }

  const handleSubmit = e => {
    e.preventDefault();
    createPoll({ question, options });
  }

  const Options = options.map((option, i) => (
    <Fragment key={i}>
      <label className="form-label">option</label>
      <input
        className="form-input"
        type="text"
        value={options}
        key={i}
        onChange={e => handleAnswer(e, i)}
      />
    </Fragment>
  ));

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="question">
        question
      </label>
      <input
        className="form-input"
        type="text"
        name="question"
        value={question}
        onChange={e => setQuestion(e.target.value)}
      />
      <div className="container">{Options}</div>
      <div className="buttons_center">
        <button className="button" type="button" onClick={() => setOptions([...options, ''])}>
          Add options
        </button>
        <button className="button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default connect(() => ({}), { createPoll })(CreatePoll);