import PropTypes from 'prop-types';
import './feedback.css';

const FeedbackOptions = ({ onAddFeedback }) => {
  return (
    <ul className="feedback__list">
      <li>
        <button className="btn" onClick={() => onAddFeedback('good')}>
          Good
        </button>
      </li>
      <li>
        <button className="btn" onClick={() => onAddFeedback('neutral')}>
          Neutral
        </button>
      </li>
      <li>
        <button className="btn" onClick={() => onAddFeedback('bad')}>
          Bad
        </button>
      </li>
    </ul>
  );
};

export { FeedbackOptions };

FeedbackOptions.propTypes = {
  onAddFeedback: PropTypes.func.isRequired,
};
