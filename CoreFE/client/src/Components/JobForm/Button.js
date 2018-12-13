import React from 'react';
import './Button.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.renderText = this.renderText.bind(this);
  }

  renderText() {
    if (!this.props.text2) {
      return (
        <div>
          <p className="text">{this.props.text}</p>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <p className="text">{this.props.text}</p>
          </div>
          <div>
            <p className="text2">{this.props.text2}</p>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div
        className="container"
        onClick={this.props.callback}
        style={{
          borderLeft: (this.props.status ? "15px solid #4886B0" : "1px solid #4886B0")
      }}
      >
        <div align="center" className="icon">
          {this.props.icon}
        </div>
        {this.renderText()}
      </div>
    );
  }
};
