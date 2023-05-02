import css from './Section.module.css';
import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <div>
      <h2 className={css.section_title}>{title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
