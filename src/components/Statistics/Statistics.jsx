import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <p className={css.statistics_item}>Good: {good} </p>
      <p className={css.statistics_item}>Neutral: {neutral} </p>
      <p className={css.statistics_item}>Bad: {bad} </p>
      <p className={css.statistics_item}>Total: {total}</p>
      <p className={css.statistics_item}>
        Positive feedback: {positivePercentage}%
      </p>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
