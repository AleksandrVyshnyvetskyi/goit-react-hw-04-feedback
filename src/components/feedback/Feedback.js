import { useState } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistic } from './Statistics';
import './feedback.css';

export function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotal = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = good => {
    const total = countTotal();
    if (!total) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  const handleAddFeedback = button => {
    switch (button) {
      case 'good':
        return setGood(prevState => prevState + 1);
      case 'neutral':
        return setNeutral(prevState => prevState + 1);
      case 'bad':
        return setBad(prevState => prevState + 1);
      default:
        return;
    }
  };

  return (
    <div className="feedback">
      <Section title="Leave feedback please">
        <FeedbackOptions onAddFeedback={handleAddFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotal()}
          positivePercentage={countPositiveFeedbackPercentage(good)}
        />
      </Section>
    </div>
  );
}
