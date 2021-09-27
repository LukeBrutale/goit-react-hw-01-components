import PropTypes from 'prop-types';
import s from './Statistical.module.css';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <div className={s.itemWrapper}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </div>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
