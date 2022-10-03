import PropTypes from 'prop-types';
import './feedback.css';

const FeedbackOptions = ({ options, onAddFeedback }) => {
  return (
    <ul className="feedback__list">
      {options.map(key => (
        <button
          className="btn"
          key={key}
          name={key}
          type="button"
          onClick={onAddFeedback}
        >
          {key.toUpperCase()}
        </button>
      ))}
    </ul>
  );
};

export { FeedbackOptions };

FeedbackOptions.propTypes = {
  onAddFeedback: PropTypes.func.isRequired,
};
