import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div>
        {options.map(option => {
          return (
            <button
              key={option}
              type="button"
              className={style.feedback}
              onClick={() => onLeaveFeedback(option)}
            >
              {capitalizeFirstLetter(option)}
            </button>
          );
        })}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
