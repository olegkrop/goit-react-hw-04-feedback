import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    const stateOptions = Object.keys(options);
    return (
      <>
        <div>
          {stateOptions.map(option => (
            <button
              className={style.feedbackButton}
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
