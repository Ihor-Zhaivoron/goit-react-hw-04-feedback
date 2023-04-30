import { useState } from 'react';
import { Notification } from './Notification/Notification';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOption = { good, neutral, bad };

  const changeValue = name => {
    console.log(name);
    // const { name } = e.currentTarget;
    // setGood(prevGood => prevGood + 1);
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevGood => prevGood + 1);
        break;
      case 'bad':
        setBad(prevGood => prevGood + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good !== 0) {
      return Math.floor((good * 100) / countTotalFeedback());
    } else {
      return 0;
    }
  };
  return (
    <>
      <Section title="Pelase leave feedback">
        <FeedbackOptions options={feedbackOption} onClickBtn={changeValue} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
