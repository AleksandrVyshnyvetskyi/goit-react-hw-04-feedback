import PropTypes from 'prop-types';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p className="none-feedback">There is no feedback</p>;
  }
  return (
    <ul className="statistic__list">
      <li className="statistic__list--item">
        <p>
          Good : <span>{good}</span>
        </p>
      </li>
      <li className="statistic__list--item">
        <p>
          Neutral : <span>{neutral}</span>
        </p>
      </li>
      <li className="statistic__list--item">
        <p>
          Bad : <span>{bad}</span>
        </p>
      </li>
      <li className="statistic__list--item">
        <p>
          Total : <span>{total}</span>
        </p>
      </li>
      <li className="statistic__list--item">
        <p>
          Positive feedback : <span>{positivePercentage}%</span>
        </p>
      </li>
    </ul>
  );
};

export { Statistic };

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
