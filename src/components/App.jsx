import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import style from './App.module.css';

export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    totalFeedback: 0,
    positiveFeedback: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleFeedback = button => {
    const { name } = button.currentTarget;
    this.setState(state => ({
      [name]: ++state[name],
    }));
  };

  render() {
    return (
      <>
        <div className={style.app}>
          <Section title="Please leave feedback">
            <FeedbackOptions options={this.state} />
          </Section>
          <Section title="Statistics"></Section>
        </div>
      </>
    );
  }
}
