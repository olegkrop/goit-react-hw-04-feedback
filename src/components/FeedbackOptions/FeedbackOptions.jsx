import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    const stateOptions = Object.keys(options);
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
      <>
        <div>
          {stateOptions.map(option => (
            <button
              className={style.feedback}
              type="button"
              onClick={onLeaveFeedback}
              name={option}
            >
              {capitalizeFirstLetter(option)}
            </button>
          ))}
        </div>
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
