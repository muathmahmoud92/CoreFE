import React from 'react';

export default class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.callback();
  }

  render() {
    return (
      <div>
        <p style={{fontSize: 25, fontWeight: "bold", textAlign: "center"}}>Review and post</p>
        <p style={{fontSize: 12, position: "relative", bottom: "20px", textAlign: "center"}}>Step 8 of 8</p>
        <hr />
      </div>
    );
  }
};
