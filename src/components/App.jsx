import React, { Component } from 'react';
import { Section } from './Section/Section';
import style from './App.module.css';

export class App extends Component {
  render() {
    return (
      <>
        <div className={style.app}>
          <Section title="Please leave feedback"></Section>
          <Section title="Statistics"></Section>
        </div>
      </>
    );
  }
}
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
