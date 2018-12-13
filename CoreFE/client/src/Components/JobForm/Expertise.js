import React from 'react';

export default class Expertise extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p style={{fontSize: 25}}>Expertise</p>
        <p style={{fontSize: 12, position: 'relative', bottom: '20px'}}>Step 4 of 8</p>
        <hr />
        <h3>What skills and expertise are most important to you?</h3>
        <p>Select skills to add from here.</p>
        <h4>{"Not what you're looking for?"}</h4>
        <p>Remove skills from here.</p>
      </div>
    );
  }
};
