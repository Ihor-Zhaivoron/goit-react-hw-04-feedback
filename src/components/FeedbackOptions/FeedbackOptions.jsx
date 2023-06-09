import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onClickBtn }) {
  const keys = Object.keys(options);
  return (
    <ul className={css.feedback_list}>
      {keys.map(key => (
        <li className={css.feedback_list} key={key}>
          <button
            className={css.feedback_btn}
            type="button"
            onClick={() => onClickBtn(key)}
          >
            {key}
          </button>
        </li>
      ))}
    </ul>
  );
}
FeedbackOptions.propTypes = {
  states: PropTypes.object,
  onClickBtn: PropTypes.func.isRequired,
};
