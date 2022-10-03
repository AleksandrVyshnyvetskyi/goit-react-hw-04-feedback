import React from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistic } from './Statistics';
import './feedback.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddFeedback = event => {
    const key = event.target.name;
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    if (!total) {
      return 0;
    }
    return Math.round((good / total) * 100);
  }

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className="feedback">
        <Section title="Leave feedback please">
          <FeedbackOptions
            onAddFeedback={this.handleAddFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export { Feedback };
